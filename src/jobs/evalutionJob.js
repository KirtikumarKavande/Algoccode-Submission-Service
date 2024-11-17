const sendPayloadSocketService = require("../helper/sendpayloadsocket");

 class EvolutionJob {

  constructor(payload) {
      this.payload = payload;
      this.name = this.constructor.name;
  }
  handle = async (job) => {
    try {
      if (job) {
        console.log("socket create",job.data)
        sendPayloadSocketService(job.data)
      }
    } catch (error) {
      console.log(error)
    }
   
  };

  failed = (job) => {
    console.log("Job failed");
  };
}
module.exports = EvolutionJob;