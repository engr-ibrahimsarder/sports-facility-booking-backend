import express from "express";
import cors from "cors";
import router from "./app/routes";
const app = express();
// parsers
app.use(express.json());
app.use(cors());

// application route
app.use("/api", router);
app.get("/", (req, res) => {
  res.send("Welcome to Sports Sever!");
});
export default app;
