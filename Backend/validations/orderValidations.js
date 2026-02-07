const Joi = require("joi");

exports.createOrderSchema = Joi.object({
  productName: Joi.string().min(2).required(),
  itemCode: Joi.string().min(2).required(),
  price: Joi.number().positive().required(),
  quantity: Joi.number().integer().positive().required(),
  totalItems: Joi.number().integer().positive().required(),
  gst: Joi.number().min(0).required(),
  status: Joi.string().valid("Yes", "No", "Pending"),
});
