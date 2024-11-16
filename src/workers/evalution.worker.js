const { Job, Worker:BullWorker } = require("bullmq");
const redisConnection = require("../config/redisConfig");
const EvolutionJob = require("../jobs/evalutionJob");
module.exports=function EvaluationWorker(queueName) {
  new BullWorker(
    queueName,
    async (job) => {

      console.log("job name", job.name);
      console.log("Sample job worker kicking", job.data);
      if (job.name === "evolution") {
        const submissionJobInstance = new EvolutionJob(job.data);

        submissionJobInstance.handle(job);

        return true;
      }
    },
    {
      connection: redisConnection,
    }
  );
}
