const express = require("express");
const logger = require("morgan");
const cors = require("cors");

const feedbackRouter = require("./routes/api/feedbacks");

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

module.exports = app;
