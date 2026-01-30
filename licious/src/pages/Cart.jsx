import React from "react";
import img1 from "../assets/images/Prime Meat Hub - Lovable (1).jpg";
import img2 from "../assets/images/Prime Meat Hub - Lovable (2).jpg";
import { useNavigate } from "react-router-dom";

const cartItems = [
  {
    id: 1,
    name: "Chicken Breast",
    price: 280,
    qty: 2,
    image: img1,
  },
  {
    id: 2,
    name: "Mutton Curry Cut",
    price: 720,
    qty: 1,
    image: img2,
  },
];

const Cart = () => {
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.qty,
    0,
  );
  const navigate = useNavigate();
  const delivery = 40;
  const total = subtotal + delivery;

  return (
    <div className="cart-page">
      <h2>My Cart</h2>

      <div className="cart-layout">
        {/* Left */}
        <div className="cart-items">
          {cartItems.map((item) => (
            <div key={item.id} className="cart-card">
              <img src={item.image} alt={item.name} />
              <div className="cart-info">
                <h4>{item.name}</h4>
                <p>₹{item.price} / kg</p>

                <div className="qty-box">
                  <button>-</button>
                  <span>{item.qty}</span>
                  <button>+</button>
                </div>
              </div>

              <div className="cart-price">₹{item.price * item.qty}</div>
            </div>
          ))}
        </div>

        {/* Right */}
        <div className="cart-summary">
          <h3>Order Summary</h3>

          <div className="summary-row">
            <span>Subtotal</span>
            <span>₹{subtotal}</span>
          </div>
          <div className="summary-row">
            <span>Delivery</span>
            <span>₹{delivery}</span>
          </div>

          <div className="summary-total">
            <span>Total</span>
            <span>₹{total}</span>
          </div>

          <button
            className="checkout-btn"
            onClick={() => {
              navigate("/checkout");
            }}
          >
            Proceed To Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
