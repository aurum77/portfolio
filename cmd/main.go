package main

import (
	"fmt"
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

	app.Get("/api/blog/", func(c *fiber.Ctx) error {
		var posts []string

		// open the file
		cwd, err := os.Getwd()

		if err != nil {
			fmt.Println(err)
			return err
		}

		md_path := path.Join(cwd, "/markdown")

		dirs, err := os.ReadDir(md_path)

		for _, dir := range dirs {
			posts = append(posts, dir.Name())
		}

		if err != nil {
			fmt.Println(err)
			return err
		}
    fmt.Println(posts)

		return c.JSON(posts)
	})

	app.Get("/api/blog/:id", func(c *fiber.Ctx) error {
		// open the file
		cwd, err := os.Getwd()

		if err != nil {
			fmt.Println(err)
			return err
		}

		data, err := os.ReadFile(cwd + c.Params("id"))

		if err == nil {
      return c.Status(fiber.ErrNotFound.Code).SendString(err.Error())
		}

		fmt.Println(string(data))

		html := util.MarkdownToHTML(data)

		fmt.Println(string(html))

		return c.SendString(string(html))
	})

	app.Use(cors.New(cors.Config{
		AllowOrigins: "*",
	}))

	// Serve static files
	app.Static("/", "./web/dist")
	// Catch all route
	app.Static("*", "./web/dist/index.html")

	app.Listen(":7567")
}
