
async function createSubmission(req, res) {
const response=this.submissionService
  const data=await response.addSubmission(req.body)
  res.status(201).send(data)
  
}
module.exports = { createSubmission };
