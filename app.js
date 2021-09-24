global.config = require(process.env.NODE_ENV === "production"
  ? "./config-prod.json"
  : "./config-dev.json");
const cors = require("cors"); 
const express = require("express");
const serversController = require("./controllers-layer/servers-controller");
const server = express();

server.use(cors()); 

server.use(express.json());

server.use("/api", serversController);

server.use("*", (request, response) =>
  response.status(404).send("Route not found.")
);

server.listen(3000, () => console.log("Start listining..."));
