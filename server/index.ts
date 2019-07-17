import {
  listenAndServe,
  Response,
  ServerRequest
} from "https://deno.land/std/http/server.ts";

const textEncoder = new TextEncoder();

const config = {
  host: "0.0.0.0",
  port: 3000
};

listenAndServe(`${config.host}:${config.port}`, (req: ServerRequest) => {
  const res: Response = {
    status: 200,
    body: textEncoder.encode(JSON.stringify({ hello: "world" })),
    headers: new Headers([["Content-Type", "application/json"]])
  };
  req.respond(res);
});
