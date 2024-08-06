FROM golang:1.22.5-alpine3.20 as build

WORKDIR /app

COPY go.mod go.sum ./
RUN go mod download

COPY . .

RUN go build -o main .

FROM gcr.io/distroless/base-debian10

COPY --from=build /app/main /

EXPOSE 8080

CMD ["/main"]