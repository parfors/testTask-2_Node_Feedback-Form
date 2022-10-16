const { Feedback } = require("../../models/feedbacks");

const getAll = async (req, res, next) => {
  const result = await Feedback.find({});
  return res.status(201).json(result);
};

module.exports = {
  getAll,
};
