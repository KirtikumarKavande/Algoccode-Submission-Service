const submissionRoutes = require("./submission.routes")

async function v1Routes(fastify) {
    fastify.register(submissionRoutes,{prefix:"/submission"})
}
module.exports=v1Routes