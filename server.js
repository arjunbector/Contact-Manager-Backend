import express from "express";
import dotenv from "dotenv";
import contactRouter from "./src/routes/contact.route.js";
import userRouter from "./src/routes/user.route.js";
import connectDB from "./src/db/index.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

connectDB().then(
  app.listen(PORT, () => {
    console.log("server rnning on port ", PORT);
  })
);

app.use(express.json());
app.use("/api/contacts", contactRouter);
app.use("/api/users", userRouter);

export default app;
