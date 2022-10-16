const mongoose = require("mongoose");
const Joi = require("joi");

const feedbackSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    feedback: {
      type: String,
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Feedback = mongoose.model("feedbacks", feedbackSchema);

const addSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  feedback: Joi.string().required(),
});

const schemas = {
  addSchema,
};

module.exports = {
  Feedback,
  schemas,
};
