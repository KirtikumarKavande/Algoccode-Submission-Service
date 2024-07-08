
async function createSubmission(req, res) {
  console.log(req.body)
const response=this.submissionService
  console.log("subservice",await response.addSubmission())
  res.send(response)
  
}
module.exports = { createSubmission };
