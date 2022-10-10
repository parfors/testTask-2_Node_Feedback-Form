const MongoClient = require("mongodb").MongoClient;

const connectMongo = async () => {
  const client = await MongoClient.connect(process.env.MONGO_URL);
  const db = client.db();

  const Feedbacks = db.collection("feedbacks");

  console.log("Connection to database success");

  return { Feedbacks };
};

module.exports = { connectMongo };
