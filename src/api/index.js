// src/api/index.js (or src/server.js)
import http from "http";
import app from "../app.js";
import { initSocket } from "../lib/socket.js";

const server = http.createServer(app);
initSocket(server);

server.listen(3000, () => {
  console.log("🚀 Server is running on http://localhost:3000");
});
