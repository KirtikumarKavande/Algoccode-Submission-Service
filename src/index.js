// Require the framework and instantiate it
const fastify = require('fastify')({ logger: true })

const PORT=3000
// Declare a route
fastify.get('/', function handler (request, reply) {
  reply.send({ hello: 'world' })
})

// Run the server!
fastify.listen({ port: PORT }, (err) => {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
  console.log("server is running on PORT", PORT)
})