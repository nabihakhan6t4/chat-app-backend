// src/api/index.js (or src/server.js)
import http from "http";
import app from "../app.js";
import { initSocket } from "../lib/socket.js";

const server = http.createServer(app);
initSocket(server);


