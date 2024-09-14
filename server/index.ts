import http from "http";
import { renderToString } from "react-dom/server";
import { IncomingMessage, ServerResponse } from "http";
import App from "../src/App";
import React from "react";

const port = 9000;

const server = http.createServer((req: IncomingMessage, res: ServerResponse) => {
  const html = renderToString(React.createElement(App));

  res.writeHead(200, {
    "Content-Type": "text/html"
  });

  const responseMessage = `
  <!DOCTYPE html>
  <html lang="ja">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>React App</title>
    </head>
    <body>
      <div id="root">${html}</div>
      <script src="/bundle.js"></script>
    </body>
  </html>
  `;
  res.end(responseMessage);
});

server.listen(port);
console.log(`The server has started and is listening on port number: ${port}`);
