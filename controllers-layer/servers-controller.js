const express = require("express");
const logic = require("../business-logic-layer/servers-logic");
const router = express.Router();

router.get("/servers", async (request, response) => {
  try {
    const products = await logic.getAllPServersAsync();
    response.json(products);
  } catch (err) {
    response.status(500).send(err.message);
  }
});

router.get("/serversSort", async (request, response) => {
  try {
    const products = await logic.getServersSortByDateAsync();
    response.json(products);
  } catch (err) {
    response.status(500).send(err.message);
  }
});


router.put("/servers", async (request, response) => {
  try {
    const server = request.body;
    const updatedServer = await logic.changeStatusAsync(server);
    response.status(201).json(updatedServer);
  } catch (err) {
    response.status(500).send(err.message);
  }
});

module.exports = router;
