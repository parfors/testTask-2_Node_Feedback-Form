const express = require("express");
const { requestError } = require("../../helpers");
const Joi = require("joi");
const { connectMongo } = require("../../db/connection");

const router = express.Router();

const addSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  feedback: Joi.string().required(),
});

router.get("/", async (req, res, next) => {
  try {
    const { Feedbacks } = await connectMongo();
    const result = await Feedbacks.find({}).toArray();
    return res.status(201).json(result);
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
    const { Feedbacks } = await connectMongo();
    const result = await Feedbacks.insertOne(feedback);
    return res.status(201).json(result);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
