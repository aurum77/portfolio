# Portfolio

- This is a portfolio app made in React and Go Fiber.
- It uses gomarkdown to convert markdown files to HTML
- DOMPurify to sanitize the HTML
- path.Clean to clear the path input against path traversal exploits.

# How to develop further ?

1. air to hot reload the backend

```bash
air
```

2. nodemon to rebuild the frontend when its edited

```bash
npm run dev
```

# How to deploy ?

- use docker:

```bash
docker build -t portfolio .
# preferably save it and send it to your vps
docker run -p 8090:8090 -v ./markdown:/app/markdown/ -v ./images:/app/images/ portfolio
# preferably add ssl and route it to 443 through some reverse proxy
# ?????
# profit
```

# TODO

- [ ] Handle errors and status codes properly
- [ ] Add support for other markdown elements
- [ ] Add a logging solution
- [ ] Add a caching solution
