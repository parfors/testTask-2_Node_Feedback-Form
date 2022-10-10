const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const MongoClient = require("mongodb").MongoClient;
const MongoURL =
  "mongodb+srv://parfors:papa9335@myclaster.00hwlbs.mongodb.net/test_tusk?retryWrites=true&w=majority";
const { connectMongo } = require("./db/connection");
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

const PORT = 8081;

const start = async () => {
  connectMongo();


  app.listen(8081, () => {
    console.log(`Server running at port ${PORT}`);
  });
};

start();

module.exports = app;
