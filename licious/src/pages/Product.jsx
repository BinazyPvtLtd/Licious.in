import React, { useState } from "react";
import img from "../assets/images/Prime Meat Hub - Lovable (4).jpg";
import { useNavigate } from "react-router-dom";
// import "./ProductDetail.css";

const data = {
  id: 1,
  category: "CHICKEN",
  title: "Chicken Breast",
  rating: 4.8,
  reviews: 234,
  price: 280,
  oldPrice: 320,
  unit: "kg",
  discount: "15% OFF",
  image: img,
  description:
    "Premium boneless chicken breast, perfect for grilling, baking, or stir-frying. Sourced from trusted farms.",

  features: [
    { icon: "🚚", title: "Free Delivery", desc: "Orders over ₹500" },
    { icon: "✔", title: "Quality Assured", desc: "100% Fresh" },
    { icon: "⚡", title: "Same Day", desc: "Order before 2PM" },
  ],

  details: [
    "100% Farm Fresh",
    "Antibiotic-free",
    "No added hormones",
    "Vacuum packed",
    "Cleaned & ready to cook",
  ],

  nutrition: [
    { value: "31g", label: "Protein" },
    { value: "165 kcal", label: "Calories" },
    { value: "3.6g", label: "Fat" },
    { value: "85mg", label: "Cholesterol" },
  ],
};

const ProductDetail = () => {
  const [qty, setQty] = useState(1);
  const navigate = useNavigate();
  const totalPrice = qty * data.price;

  return (
    <div className="product-wrapper">
      <div className="product-grid">
        {/* Image */}
        <div className="product-image">
          <span className="discount">{data.discount}</span>
          <span className="wishlist">♡</span>
          <img src={data.image} alt={data.title} />
        </div>

        {/* Info */}
        <div className="product-info">
          <p className="category">{data.category}</p>
          <h1>{data.title}</h1>

          <div className="rating">
            ⭐⭐⭐⭐☆{" "}
            <span>
              {data.rating} · {data.reviews} reviews
            </span>
          </div>

          <div className="price-row">
            <span className="price">₹{data.price}</span>
            <span className="old-price">₹{data.oldPrice}</span>
            <span className="unit">/ {data.unit}</span>
          </div>

          <p className="description">{data.description}</p>

          <div className="cart-row">
            <div className="qty-control">
              <button onClick={() => setQty(qty > 1 ? qty - 1 : 1)}>-</button>
              <span>{qty}</span>
              <button onClick={() => setQty(qty + 1)}>+</button>
            </div>

            <button className="add-cart"   onClick={() => {
              navigate("/cart");
            }}>
              🛒 Add to Cart · ₹{totalPrice}
            </button>
          </div>

          <div className="features">
            {data.features.map((item, index) => (
              <div key={index}>
                {item.icon} {item.title} <br />
                {item.desc}
              </div>
            ))}
          </div>

          <div className="details">
            <h4>PRODUCT DETAILS</h4>
            <ul>
              {data.details.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Nutrition */}
      <div className="nutrition">
        {data.nutrition.map((item, index) => (
          <div key={index}>
            <h3>{item.value}</h3>
            <p>{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductDetail;
