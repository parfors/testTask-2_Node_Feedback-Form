const express = require("express");
const { addFeedback, getFeedbacks } = require("../../models/feedbacks");
const { requestError } = require("../../helpers");
const Joi = require("joi");

const router = express.Router();

const addSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  feedback: Joi.string().required(),
});

router.get("/", async (req, res, next) => {
  try {
    const result = await getFeedbacks();
    return res.status(201).json({ result });
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const { error } = addSchema.validate(req.body);
    if (error) {
      throw requestError(400, error.message);
    }
    const feedback = req.body;
    const result = await addFeedback(feedback);
    return res.status(201).json({ result });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
