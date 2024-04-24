import express from "express";
import dotenv from "dotenv";
import contactRouter from "./src/routes/contact.route.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use("/api/contacts", contactRouter)

app.listen(PORT, () => {
  console.log("server rnning on port ", PORT);
});

export default app;