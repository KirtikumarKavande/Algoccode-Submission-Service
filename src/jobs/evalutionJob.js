
 class EvolutionJob {

  constructor(payload) {
      this.payload = payload;
      this.name = this.constructor.name;
  }
  handle = async (job) => {
    if (job) {
      console.log("socket create",job.data)
    }
  };

  failed = (job) => {
    console.log("Job failed");
  };
}
module.exports = EvolutionJob;