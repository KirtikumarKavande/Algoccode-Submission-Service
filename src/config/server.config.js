const dotenv=require('dotenv')
dotenv.config();

const serverConfig = {
  PORT: process.env.PORT || 3000,
  REDIS_PORT: process.env.REDIS_PORT || 6379,
  REDIS_HOST: process.env.REDIS_HOST || "127.0.0.1",
  MONGODB_CONNECTION_URL:process.env.MONGODB_CONNECTION_URL,
  NODE_ENV:process.env.NODE_ENV,
  PROBLEM_ADMIN_SERVICE_URL:process.env.PROBLEM_ADMIN_SERVICE_URL
};
module.exports= serverConfig;
