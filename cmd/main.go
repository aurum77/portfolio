package main

import (
	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
)

func main() {
	app := fiber.New()

	app.Use(cors.New(cors.Config{
		AllowOrigins: "http://localhost:5173",
	}))

	app.Get("/api", func(c *fiber.Ctx) error {
		return c.SendString("hello from the backend")
	})

	// Serve static files
	app.Static("/", "./web/dist")
	// Catch all route
	app.Static("*", "./web/dist/index.html")

	app.Listen(":7567")
}
