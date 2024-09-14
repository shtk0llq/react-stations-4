import http from "http";
import { IncomingMessage, ServerResponse } from "webpack-dev-server";

const port = 9000;

const server = http.createServer((req: IncomingMessage, res: ServerResponse) => {
  res.writeHead(200, {
    "Content-Type": "text/html"
  });

  const responseMessage = "<h1>Hello World</h1>";
  res.end(responseMessage);
  console.log(`Sent a response : ${responseMessage}`);
});

server.listen(port);
console.log(`The server has started and is listening on port number: ${port}`);
