const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    productName: {
      type: String,
      required: true,
      trim: true,
    },

    itemCode: {
      type: String,
      required: true,
      trim: true,
    },

    price: {
      type: Number,
      required: true,
      min: 0,
    },

    quantity: {
      type: Number,
      required: true,
      min: 1,
    },

    totalItems: {
      type: Number,
      required: true,
      min: 1,
    },

    gst: {
      type: Number,
      required: true,
      min: 0,
    },

    status: {
      type: String,
      enum: ["Yes", "No", "Pending"],
      default: "Pending",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", orderSchema);
