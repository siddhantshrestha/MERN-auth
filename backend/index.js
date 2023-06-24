import express from "express"
import dotenv from "dotenv"
import userRoutes from "./routes/userRoutes.js"
import { errorHandler, notFound } from "./middleware/errorMiddleware.js"

const app = express()
dotenv.config()
const port = process.env.PORT || 3000

app.use("/api/users", userRoutes)

// app.get("/", (req, res) => {
//   res.status(200).json({
//     message: "This is a new connection",
//   })
// })


//middleware
app.use(notFound)
app.use(errorHandler)

app.listen(port, () => {
  console.log(`App is running on ${port}... `)
})
