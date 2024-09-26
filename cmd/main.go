package main

import (
	"fmt"
	"os"
	"portfolio/util"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
)

func main() {
	app := fiber.New()

	app.Use(cors.New(cors.Config{
		AllowOrigins: "http://localhost:5173",
	}))

	app.Get("/api", func(c *fiber.Ctx) error {
		// open the file
		cwd, err := os.Getwd()

		if err != nil {
			fmt.Println(err)
			return err
		}

		data, err := os.ReadFile(cwd + "/markdown/markdown_test.md")

		if err != nil {
			fmt.Println(err)
			return err
		}

		fmt.Println(string(data))

		html := util.MarkdownToHTML(data)

		fmt.Println(string(html))

		return c.SendString(string(html))
	})

	app.Use(cors.New(cors.Config{
		AllowOrigins: "http://127.0.0.1:7567/",
	}))

	// Serve static files
	app.Static("/", "./web/dist")
	// Catch all route
	app.Static("*", "./web/dist/index.html")

	app.Listen(":7567")
}
