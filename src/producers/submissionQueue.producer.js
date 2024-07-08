const submissionQueue = require("../queues/submissionQueue");

module.exports= async function (payload) {
  await submissionQueue.add("submission", payload);
  console.log("Successfully added a new job");
}
