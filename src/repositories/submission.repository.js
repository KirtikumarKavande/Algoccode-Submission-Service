const Submission = require("../models/submission.model");

class SubmissionRepository {
    constructor(){
        this.submissionModel = Submission;
    }
    async createSubmission(submission) {
        return await submissionModel.create(submission)
    }
}

module.exports=SubmissionRepository