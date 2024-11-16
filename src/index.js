const fastify = require('fastify')({ logger: false });
const app = require('./app');
const connectToDB = require('./config/db.config');
const serverConfig = require('./config/server.config');
const EvaluationWorker  = require('./workers/evalution.worker');


fastify.register(app);

fastify.listen({ port: serverConfig.PORT }, async(err) => {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
  try {
    EvaluationWorker("EvaluatorQueue");

    await connectToDB()
    console.log(`Server is running on PORT ${serverConfig.PORT}`);
  } catch (error) {
    console.log(error)
  }
  

});
