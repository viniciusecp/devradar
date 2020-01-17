const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const http = require("http");
const routes = require("./routes");
const { setupWebSocket } = require("./websocket");

const app = express();
const server = http.Server(app);

mongoose.connect("mongodb://localhost:27017/devradar", {
  useUnifiedTopology: true,
  useNewUrlParser: true
});

setupWebSocket(server);

app.use(cors());
app.use(express.json());
app.use(routes);

server.listen(3333);
