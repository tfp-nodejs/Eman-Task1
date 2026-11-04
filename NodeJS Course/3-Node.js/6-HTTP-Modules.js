const http = require("http");

const server = http.createServer((req, res) => {
  const url = req.url;

  if (url === "/") {
    res.writeHead(200, { "content-type": "text/html" });
    res.end("Home Page");
  } else if (url === "/about") {
    res.writeHead(200, { "content-type": "text/html" });
    res.end("About Page");
  } else {
    res.writeHead(404, { "content-type": "text/html" });
    res.end("<h1>Not Found</h1>");
  }
});

server.listen(5000, () => {
  console.log("Server is listening on port 5000...");
});
