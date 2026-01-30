import React, { useState } from "react";

const Checkout = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    city: "",
    pincode: "",
    address: "",
    payment: "cod",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    console.log("Saved Address:", formData);
    alert("Delivery details saved successfully!");
  };

  return (
    <div className="checkout-page">
      <h2>Checkout</h2>

      <div className="checkout-layout">
        {/* Left */}
        <div className="checkout-form">
          <h3>Delivery Details</h3>

          <div className="form-grid">
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Full Name"
            />
            <input
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone Number"
            />
            <input
              name="city"
              value={formData.city}
              onChange={handleChange}
              placeholder="City"
            />
            <input
              name="pincode"
              value={formData.pincode}
              onChange={handleChange}
              placeholder="Pincode"
            />
            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Full Address"
            ></textarea>
          </div>

          {/* Save Button */}
          <button className="save-btn" onClick={handleSave}>
            Save Details
          </button>

          <h3>Payment Method</h3>

          <div className="payment-box">
            <label>
              <input
                type="radio"
                name="payment"
                value="cod"
                checked={formData.payment === "cod"}
                onChange={handleChange}
              />
              Cash On Delivery
            </label>
            <label>
              <input
                type="radio"
                name="payment"
                value="online"
                checked={formData.payment === "online"}
                onChange={handleChange}
              />
              UPI / Card
            </label>
          </div>
        </div>

        {/* Right */}
        <div className="cart-summary">
          <h3>Price Summary</h3>

          <div className="summary-row">
            <span>Subtotal</span>
            <span>₹1280</span>
          </div>
          <div className="summary-row">
            <span>Delivery</span>
            <span>₹40</span>
          </div>

          <div className="summary-total">
            <span>Total</span>
            <span>₹1320</span>
          </div>

          <button className="checkout-btn">Place Order</button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
