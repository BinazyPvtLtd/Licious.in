import React from "react";
import Header from "../components/Header/Header";
import img from "../assets/images/banner01.png";
import Category from "../components/HomePage/Categories";
import CardCarousel from "../components/HomePage/CardCarousels";

const Homepage = () => {
  return (
    <>
      <div className="section">
        <div className="container">
          <img src={img} alt="banner" className="banner-img" />
        </div>
        {/* Categories section */}
        <div>
          <Category />
        </div>
        <div>
          <CardCarousel />
        </div>
      </div>
    </>
  );
};
export default Homepage;
