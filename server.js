const http = require("http");

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.write("Hello World!");
    res.end();
});

const PORT = 3000;

server.listen(PORT, "localhost", () => {
    console.log("Server started at http://localhost:3000");
});
