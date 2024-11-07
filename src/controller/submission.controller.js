
async function createSubmission(req, res) {
  console.log("req is reaching in controller", req.body)
  try {
    const response = this.submissionService
    const data = await response.addSubmission(req.body)
    res.status(201).send(data)
  } catch (error) {
  res.status(400).json("Something went wrong while creating submission")
  }


}
module.exports = { createSubmission };
