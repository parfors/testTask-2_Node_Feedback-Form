const fs = require("fs/promises");
const { nanoid } = require("nanoid");
const path = require("path");

const feedbacksPath = path.join(__dirname, "feedbacks.json");

const getFeedbacks = async () => {
  try {
    const result = await fs.readFile(feedbacksPath, "utf-8");
    return JSON.parse(result);
  } catch (error) {
    return error.message;
  }
};

const addFeedback = async (data) => {
  const { name, email, feedback } = data;
  try {
    const feedbacks = await getFeedbacks();
    console.log(feedbacks);
    const newFeedback = {
      id: nanoid(),
      name,
      email,
      feedback,
    };
    const newFeedbacks = [...feedbacks, newFeedback];
    await fs.writeFile(feedbacksPath, JSON.stringify(newFeedbacks, null, 2));
    return newFeedback;
  } catch (error) {
    return error.message;
  }
};

module.exports = {
  getFeedbacks,
  addFeedback,
};
