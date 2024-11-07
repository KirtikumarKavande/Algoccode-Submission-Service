const Submission = require("../models/submission.model");

class SubmissionRepository {
    constructor(){
        this.submissionModel = Submission;
    }
    async createSubmission(submission) {
        console.log("inside submission",submission)
        return await this.submissionModel.create(submission)
    }
}

module.exports=SubmissionRepository