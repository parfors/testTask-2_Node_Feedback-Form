const MongoClient = require("mongodb").MongoClient;
const MongoURL =
  "mongodb+srv://parfors:papa9335@myclaster.00hwlbs.mongodb.net/test_tusk?retryWrites=true&w=majority";

const connectMongo = async () => {
  const client = await MongoClient.connect(MongoURL);
  const db = client.db();

  const Feedbacks = db.collection("feedbacks");

  console.log("Connection to database success");

  return { Feedbacks };
};

module.exports = { connectMongo };
