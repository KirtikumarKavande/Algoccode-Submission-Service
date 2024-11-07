const { createSubmission } = require("../../controller/submission.controller");

async function submissionRoutes(fastify, options) {
  fastify.post("/addsubmissions", createSubmission);
}

module.exports = submissionRoutes;
