const http = require("http");
const { readFileSync } = require("fs");

const htmlFile = readFileSync("./public/index.html", "utf8");
const styleFile = readFileSync("./public/style.css", "utf8");
const browserFile = readFileSync("./public/browser.js", "utf8");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "content-type": "text/html" });
    res.end(htmlFile);
  } else if (req.url === "/style.css") {
    res.writeHead(200, { "content-type": "text/css" });
    res.end(styleFile);
  } else if (req.url === "/browser.js") {
    res.writeHead(200, { "content-type": "text/javascript" });
    res.end(browserFile);
  } else if (req.url === "/user") {
    const user = { name: "basel", age: "24" };
    res.writeHead(200, { "content-type": "application/json" });
    const strUser = JSON.stringify(user);
    res.end(strUser);
  } else {
    res.writeHead(404, { "content-type": "text/html" });
    res.end("<h1>Not Found</h1>");
  }
});

server.listen(5000, () => {
  console.log("Server is listening on port 5000...");
});
