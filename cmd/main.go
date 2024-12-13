package main

import (
	"crypto/tls"
	"fmt"
	"net/url"
	"os"
	"path"
	"portfolio/util"
	"strings"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/compress"
	"github.com/gofiber/fiber/v2/middleware/cors"
	"github.com/joho/godotenv"
	"golang.org/x/crypto/acme/autocert"
)

func main() {
	app := fiber.New()

	app.Use(cors.New(cors.Config{
		AllowOrigins: "http://localhost:5173",
	}))

	app.Use(cors.New(cors.Config{
		AllowOrigins: "*",
	}))

	app.Use(compress.New())

	app.Get("/api/blog/", func(c *fiber.Ctx) error {
		posts := []string{}

		// open the file
		cwd, err := os.Getwd()

		if err != nil {
			fmt.Println(err)
			return fiber.NewError(fiber.StatusInternalServerError, "failed to get working directory")
		}

		md_path := path.Join(cwd, "/markdown")

		dir, err := os.ReadDir(md_path)

		if err != nil {
			fmt.Println(err)
			return fiber.NewError(fiber.StatusInternalServerError, "failed to read directory")
		}

		for i := len(dir) - 1; i >= 0; i-- {
			posts = append(posts, dir[i].Name())
		}

		return c.JSON(posts)
	})

	app.Get("/api/blog/:postId", func(c *fiber.Ctx) error {
		// open the file
		cwd, err := os.Getwd()

		if err != nil {
			fmt.Println(err)
			return fiber.NewError(fiber.StatusInternalServerError, "failed to get working directory")
		}

		unescaped_filename, err := url.QueryUnescape(c.Params("postId"))

		if err != nil {
			fmt.Println(err)
			return fiber.NewError(fiber.StatusInternalServerError, "failed to escape post id")
		}

		sanitized_path := path.Clean(path.Join(cwd, "markdown", unescaped_filename))

		data, err := os.ReadFile(sanitized_path)

		if err != nil {
			return fiber.NewError(fiber.StatusNotFound)
		}

		html := util.MarkdownToHTML(data)

		return c.SendString(string(html))
	})

	// Serve static files
	app.Static("/", "./dist", fiber.Static{
		Compress: true,
	})

	// Serve image files
	app.Static("/images", "./images", fiber.Static{
		Compress: true,
	})

	// Catch all route
	app.Static("*", "./dist/index.html", fiber.Static{
		Compress: true,
	})

	err := godotenv.Load(".env")

	if err != nil {
		panic(err)
	}

	uri := os.Getenv("URI")

	// if no URI is provided default to 8080 and http
	if uri == "" {
		uri = "127.0.0.1:8080"
		err := app.Listen(uri)

		if err != nil {
			panic(err)
		}
	}

	// if URI has http:
	if strings.Contains(uri, "http:") {
		addr := strings.Split(uri, "http://")[1]

		err := app.Listen(addr)

		if err != nil {
			panic(err)
		}
	}

	// if URI has https:
	if strings.Contains(uri, "https:") {
		addr := strings.Split(uri, "https://")[1]

		manager := &autocert.Manager{
			Prompt:     autocert.AcceptTOS,
			HostPolicy: autocert.HostWhitelist(addr),
			Cache:      autocert.DirCache("./certs"),
		}

		cfg := &tls.Config{
			GetCertificate: manager.GetCertificate,
			NextProtos: []string{
				"http/1.1", "acme-tls/1",
			},
		}

		ln, err := tls.Listen("tcp", ":443", cfg)

		if err != nil {
			panic(err)
		}

		app.Listener(ln)
	}
}
