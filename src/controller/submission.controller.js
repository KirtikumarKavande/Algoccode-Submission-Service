
async function createSubmission(req, res) {
const response=this.submissionService
  const data=await response.addSubmission(req.body)
  res.send(data)
  
}
module.exports = { createSubmission };
