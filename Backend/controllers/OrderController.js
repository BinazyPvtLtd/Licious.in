const Order = require("../models/Order");
const { createOrderSchema } = require("../validations/orderValidation");

// CREATE ORDER
exports.createOrder = async (req, res) => {
  try {
    const { error } = createOrderSchema.validate(req.body);
    if (error)
      return res.status(400).json({ success: false, message: error.details[0].message });

    const order = new Order(req.body);
    await order.save();

    res.status(201).json({
      success: true,
      message: "Order created successfully",
      data: order,
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// GET ALL ORDERS
exports.getOrders = async (req, res) => {
  try {
    const orders = await Order.find().sort({ createdAt: -1 });
    res.json({ success: true, data: orders });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// GET SINGLE ORDER
exports.getOrderById = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);
    if (!order) return res.status(404).json({ success: false, message: "Order not found" });

    res.json({ success: true, data: order });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// UPDATE ORDER
exports.updateOrder = async (req, res) => {
  try {
    const order = await Order.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!order) return res.status(404).json({ success: false, message: "Order not found" });

    res.json({ success: true, message: "Order updated successfully", data: order });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// DELETE ORDER
exports.deleteOrder = async (req, res) => {
  try {
    const order = await Order.findByIdAndDelete(req.params.id);
    if (!order) return res.status(404).json({ success: false, message: "Order not found" });

    res.json({ success: true, message: "Order deleted successfully" });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
