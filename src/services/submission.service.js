const submissionQueueProducer = require("../producers/submissionQueue.producer");

class SubmissionService {
  constructor(submissionRepository) {
    this.submissionRepository = submissionRepository;
  }

  async addSubmission(data) {
    const dataFromDB = await this.submissionRepository.createSubmission(data);
    let queueResponse = await submissionQueueProducer(dataFromDB);
    return {
      queueResponse,
      dbResponse: dataFromDB,
    };
  }
}

module.exports = SubmissionService;
