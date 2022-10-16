const { app } = require("./app");
const mongoose = require("mongoose");

const PORT = process.env.PORT;
const MONGO_URL = process.env.MONGO_URL;

mongoose
  .connect(MONGO_URL)
  .then(
    app.listen(PORT, () => {
      console.log(`Server running at port ${PORT}`);
    })
  )
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
