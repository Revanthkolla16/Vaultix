import express from "express"
import cors from "cors"
import authroutes from "./routes/auth.route.js"
import passwordRoutes from "./routes/password.route.js"
import dotenv from "dotenv"
import { connectDB } from "./config/db.js"

const app = express()
const PORT = process.env.PORT||3000
dotenv.config()

app.use(express.json())
const allowedOrigins = [
  "https://vaultix-pi.vercel.app",
  "http://localhost:5173"
];
app.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true)
    } else {
      callback(new Error("Not allowed by CORS"))
    }
  },
  credentials: true
}));

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use("/api/auth", authroutes)
app.use("/api/passwords", passwordRoutes)

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
  connectDB()
})
