const express = require("express");
const { ctrlWrapper } = require("../../helpers");
const ctrl = require("../../controllers/feedbacks");
const { validateBody } = require("../../middleWares");
const {
  schemas: { addSchema },
} = require("../../models/feedbacks");

const router = express.Router();

router.get("/", ctrlWrapper(ctrl.getAll));

router.post("/", validateBody(addSchema), ctrlWrapper(ctrl.add));

module.exports = router;
