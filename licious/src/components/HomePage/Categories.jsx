import React from "react";
import img1 from "../../assets/images/Prime Meat Hub - Lovable (1).jpg";
import img2 from "../../assets/images/Prime Meat Hub - Lovable (2).jpg";
import img3 from "../../assets/images/Prime Meat Hub - Lovable (3).jpg";
import img4 from "../../assets/images/Prime Meat Hub - Lovable (4).jpg";
// import img5 from "../assets/images/Prime Meat Hub - Lovable .jpg";

const categories = [
  {
    title: "Chicken",
    subtitle: "Fresh farm chicken cuts",
    items: "12 Items",
    image: img1,
  },
  {
    title: "Mutton",
    subtitle: "Premium goat & lamb",
    items: "8 Items",
    image: img2,
  },
  {
    title: "Fish",
    subtitle: "Freshwater & river fish",
    items: "15 Items",
    image: img3,
  },
  {
    title: "Seafood",
    subtitle: "Prawns, crabs & more",
    items: "10 Items",
    image: img4,
  },
];

const Categories = () => {
  return (
    <section className="category-section">
      <div className="category-header">
        <span>OUR SELECTION</span>
        <h2>Shop by Category</h2>
        <p>
          Explore our wide range of fresh, quality meats sourced directly from
          trusted farms
        </p>
      </div>

      <div className="category-grid">
        {categories.map((cat, index) => (
          <div key={index} className="category-card">
            <img src={cat.image} alt={cat.title} />
            <div className="overlay" />
            <span className="items">{cat.items}</span>
            <div className="category-content">
              <h3>{cat.title}</h3>
              <p>{cat.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;
