const { createSubmission } = require("../../controller/submission.controller");

async function submissionRoutes(fastify, options) {
  fastify.post("/addsubmission", createSubmission);
}

module.exports = submissionRoutes;
