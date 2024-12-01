# Portfolio

- This is a portfolio app made in React and Go Fiber.
- It uses gomarkdown to convert markdown files to HTML
- DOMPurify to sanitize the HTML
- path.Clean to clear the path input against path traversal exploits.

# How to deploy ?

- use docker:

```bash
docker build -t portfolio .
docker run -p 80:8080 -p 8080:8080 -v ./markdown:/app/markdown/ portfolio
```

# TODO

- [ ] Handle errors and status codes properly
- [ ] Add support for other markdown elements
- [ ] Add a logging solution
- [ ] Add a caching solution
