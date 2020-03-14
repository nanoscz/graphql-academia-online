import { ApolloServer } from "apollo-server-express"
import expressPlayGround from "graphql-playground-middleware-express"
import express from "express"
import compression from "compression"
import cors from "cors"

import { settings } from "./config"
import { createServer } from "http"

const app = express()
app.use('*', cors());
app.use(compression())

import schema from "./schema"
const server = new ApolloServer({
  schema
})
server.applyMiddleware({app})
app.get('/', expressPlayGround({
  endpoint: '/graphql'
}))

const httpServer = createServer(app)
httpServer.listen(settings.PORT, () => {
  console.log(`Server is listening at http://localhost:${settings.PORT}/graphql`)
})