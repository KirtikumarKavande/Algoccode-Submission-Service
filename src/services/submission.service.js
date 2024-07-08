const submissionQueueProducer = require("../producers/submissionQueue.producer");

class SubmissionService {
  constructor() {}

  async addSubmission(data) {
  return await submissionQueueProducer(data)
  }
}

module.exports = SubmissionService;
