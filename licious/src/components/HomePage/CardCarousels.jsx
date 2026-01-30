import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import img1 from "../../assets/images/Prime Meat Hub - Lovable (1).jpg";
import img2 from "../../assets/images/Prime Meat Hub - Lovable (2).jpg";
import img3 from "../../assets/images/Prime Meat Hub - Lovable (3).jpg";
import img4 from "../../assets/images/Prime Meat Hub - Lovable (4).jpg";
import { useNavigate } from "react-router-dom";
const categories = ["All", "Chicken", "Mutton", "Fish", "Seafood"];

const productsData = [
  {
    id: 1,
    category: "Chicken",
    title: "Chicken Breast",
    price: 280,
    oldPrice: 320,
    unit: "per kg",
    image: img1,
    badge: "Best Seller",
    stock: "In Stock",
  },
  {
    id: 2,
    category: "Chicken",
    title: "Chicken Drumsticks",
    price: 220,
    unit: "per kg",
    image: img2,
    stock: "In Stock",
  },
  {
    id: 3,
    category: "Mutton",
    title: "Mutton Curry Cut",
    price: 750,
    oldPrice: 850,
    unit: "per kg",
    image: img3,
    badge: "Premium",
    stock: "In Stock",
  },
  {
    id: 4,
    category: "Mutton",
    title: "Lamb Chops",
    price: 890,
    unit: "per kg",
    image: img4,
    stock: "Out of Stock",
  },
  {
    id: 1,
    category: "Chicken",
    title: "Chicken Breast",
    price: 280,
    oldPrice: 320,
    unit: "per kg",
    image: img1,
    badge: "Best Seller",
    stock: "In Stock",
  },
  {
    id: 2,
    category: "Chicken",
    title: "Chicken Drumsticks",
    price: 220,
    unit: "per kg",
    image: img2,
    stock: "In Stock",
  },
  {
    id: 3,
    category: "Mutton",
    title: "Mutton Curry Cut",
    price: 750,
    oldPrice: 850,
    unit: "per kg",
    image: img3,
    badge: "Premium",
    stock: "In Stock",
  },
  {
    id: 4,
    category: "Mutton",
    title: "Lamb Chops",
    price: 890,
    unit: "per kg",
    image: img4,
    stock: "Out of Stock",
  },
];

const CardCarousel = () => {
  const [active, setActive] = useState("All");
  const navigate = useNavigate();
  const filtered =
    active === "All"
      ? productsData
      : productsData.filter((p) => p.category === active);

  return (
    <div className="carousel-wrapper">
      {/* Header */}
      <div className="carousel-header">
        <div>
          <span className="sub-title">FRESH ARRIVALS</span>
          <h2>Today's Best Picks</h2>
          <p>
            Hand-selected premium cuts with competitive prices. Check
            availability and add to cart!
          </p>
        </div>

        <div className="filter-buttons">
          {categories.map((cat) => (
            <button
              key={cat}
              className={active === cat ? "active" : ""}
              onClick={() => setActive(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Carousel */}
      <div className="carousel-track">
        {filtered.map((item) => (
          <div className="product-card" key={item.id}>
            <div className="image-box">
              {item.badge && (
                <span
                  className={`badge ${item.badge
                    .toLowerCase()
                    .replace(" ", "-")}`}
                >
                  {item.badge}
                </span>
              )}

              <span
                className={`stock ${item.stock === "In Stock" ? "in" : "out"}`}
              >
                {item.stock}
              </span>

              <img
                src={item.image}
                alt={item.title}
                onClick={() => navigate("/products")}
                style={{ cursor: "pointer " }}
              />
            </div>

            <div className="card-body">
              <span className="category">{item.category}</span>
              <h3>{item.title}</h3>

              <div className="price-row">
                <div>
                  <span className="price">₹{item.price}</span>
                  {item.oldPrice && (
                    <span className="old-price">₹{item.oldPrice}</span>
                  )}
                  <p>{item.unit}</p>
                </div>

                <button
                  disabled={item.stock === "Out of Stock"}
                  className="cart-btn"
                >
                  <FaShoppingCart />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* View All Button */}
      <div className="view-all-wrapper">
        <button className="view-all-btn">View All Products</button>
      </div>
    </div>
  );
};

export default CardCarousel;
