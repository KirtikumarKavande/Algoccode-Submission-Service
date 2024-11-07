const submissionRoutes = require("./submission.routes")

async function v1Routes(fastify) {
    fastify.register(submissionRoutes,{prefix:"/submissions"})
}
module.exports=v1Routes