import express from "express"
import compression from "compression"
import cors from "cors"

import { settings } from "./config"
import { createServer } from "http"

const app = express()
app.use('*', cors());
app.use(compression())

app.get('/', (req, res) => {
  res.send("hello academia online")
})

const httpServer = createServer(app)
httpServer.listen(settings.PORT, () => {
  console.log(`run server http://localhost:${settings.PORT}/grapql`)
})