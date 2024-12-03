package main

import (
	"fmt"
	"net/url"
	"os"
	"path"
	"portfolio/util"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
)

func main() {
	app := fiber.New()

	app.Use(cors.New(cors.Config{
		AllowOrigins: "http://localhost:5173",
	}))

	app.Use(cors.New(cors.Config{
		AllowOrigins: "*",
	}))

	app.Get("/api/blog/", func(c *fiber.Ctx) error {
		posts := []string{}

		// open the file
		cwd, err := os.Getwd()

		if err != nil {
			fmt.Println(err)
			return err
		}

		md_path := path.Join(cwd, "/markdown")

		dir, err := os.ReadDir(md_path)

		for i := len(dir) - 1; i >= 0; i-- {
			posts = append(posts, dir[i].Name())
		}

		if err != nil {
			fmt.Println(err)
			return err
		}

		return c.JSON(posts)
	})

	app.Get("/api/blog/:postId", func(c *fiber.Ctx) error {
		// open the file
		cwd, err := os.Getwd()

		if err != nil {
			fmt.Println(err)
			return err
		}

		unescaped_filename, err := url.QueryUnescape(c.Params("postId"))

		if err != nil {
			fmt.Println(err)
			return err
		}

		sanitized_path := path.Clean(path.Join(cwd, "markdown", unescaped_filename))

		data, err := os.ReadFile(sanitized_path)

		if err != nil {
			return fiber.NewError(fiber.StatusNotFound, "File not found")
		}

		html := util.MarkdownToHTML(data)

		return c.SendString(string(html))
	})

	// Serve static files
	app.Static("/", "./dist")
	// Catch all route
	app.Static("*", "./dist/index.html")

	app.Listen(":8080")
}
