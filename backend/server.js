import express from "express"
import cors from "cors"
import authroutes from "./routes/auth.route.js"
import passwordRoutes from "./routes/password.route.js"
import dotenv from "dotenv"
import { connectDB } from "./config/db.js"

const app = express()
const PORT = process.env.PORT || 3000
dotenv.config()

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use("/api/auth", authroutes)
app.use("/api/passwords", passwordRoutes)

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
  connectDB()
})
