const http = require("http");
var fs = require("fs");

http
  .createServer((req, res) => {
    console.log(req.url);

    if (req.url === "/") {
      fs.readFile("index.html", function(err, data) {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data);
        res.end();
      });
    } else if (req.url.includes("/css")) {
      fs.readFile(req.url.substr(1), function(err, data) {
        res.writeHead(200, { "Content-Type": "text/css" });
        res.write(data);
        res.end();
      });
    } else if (req.url.includes("/api/hello")) {
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify({ hello: "friend" }));
    }
  })
  .listen(1800);
