const serverConfig= require("./server.config") ;

const Redis = require("ioredis");

const redisConfig = {
  port: serverConfig.REDIS_PORT,
  host: serverConfig.REDIS_HOST,
  maxRetriesPerRequest: null,
};
const redisConnection = new Redis(redisConfig);
module.exports= redisConnection;
