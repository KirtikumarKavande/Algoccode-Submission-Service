const { fetchProblemDetails } = require("../apis/problemAdminApi");
const submissionQueueProducer = require("../producers/submissionQueue.producer");

class SubmissionService {
  constructor(submissionRepository) {
    this.submissionRepository = submissionRepository;
  }

  async addSubmission(data) {
    try {
      console.log("addSubmission", data);
      const problemId = data.problemId;
      const userId = data.userId;

      const problemAdminApiResponse = await fetchProblemDetails(problemId);
      console.log(problemAdminApiResponse,problemAdminApiResponse)
      if(!problemAdminApiResponse) {
        throw new Error('Failed to create a submission in the repository');
    }
    // const languageCodeStub = problemAdminApiResponse.data.codeStubs.find(codeStub => codeStub.language.toLowerCase() === submissionPayload.language.toLowerCase());
    // const languageCodeStub = problemAdminApiResponse.data.codeStubs.find(codeStub => codeStub.language.toLowerCase() === submissionPayload.language.toLowerCase());

    const submission  = await this.submissionRepository.createSubmission(data);
    console.log("submission ", submission );
    console.log("submission ", problemAdminApiResponse );
    let queueResponse = await submissionQueueProducer(
      {
        [submission._id]: {
            code: submission.code,
            language: submission.language,
            testCases: problemAdminApiResponse.data.testCases,
            userId,
            submissionId: submission._id

        }
    }
    );
    return {
      queueResponse,
      dbResponse: submission ,
    };
    } catch (error) {
   
      console.log(error);
    }
    
  }
}

module.exports = SubmissionService;
