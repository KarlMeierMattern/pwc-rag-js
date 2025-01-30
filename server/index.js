import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

app.use("/", (req, res) => {
  res.status(200).send("Hello");
});

const PORT = process.env.PORT || 5050;

app.listen(PORT, () => {
  console.log(`Listening on port http://localhost:${PORT}`);
});
