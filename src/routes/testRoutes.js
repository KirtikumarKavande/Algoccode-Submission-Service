  const testController = require("../controller/test.controller");

  async function testRoutes(fastify, options) {
    fastify.get("/ping",testController);
  }

  module.exports = testRoutes;
