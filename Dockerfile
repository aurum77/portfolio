FROM golang:alpine AS go_build
WORKDIR /app
COPY . .
RUN go build -o portfolio cmd/main.go

FROM node:22-alpine AS react_build
COPY ./web /web
WORKDIR /web
RUN npm install --omit dev
RUN npm run build

FROM alpine:3.20.3 AS final
# The server binary
COPY --from=go_build /app/portfolio /app/portfolio
# The folder to read markdown files from
COPY --from=go_build /app/markdown /app/markdown
# The web page assets
COPY --from=react_build /dist /app/dist

RUN adduser --shell /sbin/nologin --disabled-password --no-create-home -u 1338 -g appuser appuser
RUN chown -R appuser:appuser /app
USER appuser
WORKDIR /app
ENTRYPOINT [ "/app/portfolio" ]
