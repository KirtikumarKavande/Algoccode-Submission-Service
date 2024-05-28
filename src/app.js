const fastifyPlugin = require('fastify-plugin');

async function app(fastify, options) {
  fastify.register(require('@fastify/cors'));

  // Registering routes with prefix
  fastify.register(require('./routes/testRoutes'), { prefix: '/test' });
}

module.exports = fastifyPlugin(app);
