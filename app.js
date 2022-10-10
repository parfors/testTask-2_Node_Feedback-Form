const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const { connectMongo } = require("./db/connection");
const feedbackRouter = require("./routes/api/feedbacks");
require("dotenv").config();

const app = express();

app.use(logger("tiny"));
app.use(express.json());
app.use(cors());

app.use("/api/feedbacks", feedbackRouter);
app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((error, req, res, next) => {
  const { status = 500, message = " Server error" } = error;
  res.status(status).json({ message });
});

const PORT = process.env.PORT;

const start = async () => {
  connectMongo();

  app.listen(PORT, () => {
    console.log(`Server running at port ${PORT}`);
  });
};

start();
