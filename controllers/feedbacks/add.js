const { Feedback } = require("../../models/feedbacks");

const add = async (req, res, next) => {
  const body = req.body;
  const result = await Feedback.create(body);
  return res.status(201).json(result);
};

module.exports = { add };
