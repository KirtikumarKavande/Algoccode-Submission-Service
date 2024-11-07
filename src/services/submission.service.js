const submissionQueueProducer = require("../producers/submissionQueue.producer");

class SubmissionService {
  constructor(submissionRepository) {
    this.submissionRepository = submissionRepository;
  }

  async addSubmission(data) {
    try {
      console.log("addSubmission", data);
    const dataFromDB = await this.submissionRepository.createSubmission(data);
    console.log("dataFromDB", dataFromDB);
    let queueResponse = await submissionQueueProducer(dataFromDB);
    return {
      queueResponse,
      dbResponse: dataFromDB,
    };
    } catch (error) {
   
      console.log(error);
    }
    
  }
}

module.exports = SubmissionService;
