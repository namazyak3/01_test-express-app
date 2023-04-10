import express, { Application, Request, Response } from "express"
import logger from "./functions/logger"

const app: Application = express()
const PORT = 3000

app.set("views", "./src/views")

logger("Server", "Application is starting...")

app.get("/", (req: Request, res: Response) => {
  logger("Server", "localhost:3000(Get)")
  res.render("index.ejs")
})

app.listen(PORT)