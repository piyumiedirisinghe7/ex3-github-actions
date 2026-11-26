const http = require("http");
const functions = require("./functions");

function handler(request, response) {
    if (request.url === "/hello") {
        response.writeHead(200, { "Content-Type": "text/plain" });
        response.end("Hello World!");
    } else if (request.url === "/greeting") {
        response.writeHead(200, { "Content-Type": "text/plain" });
        response.end(functions.greeting(new Date().getHours()));
    } else {
        response.writeHead(404, { "Content-Type": "text/plain" });
        response.end("Not found");
    }
}

const server = http.createServer(handler);

// only listen when run directly (node server.js); the tests require() this file
if (require.main === module) {
    server.listen(9000, () => console.log("Listening on 9000"));
}

module.exports = server;
