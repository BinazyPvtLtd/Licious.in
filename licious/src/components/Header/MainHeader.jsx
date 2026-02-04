import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import "./header.css";

const MainHeader = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const handleClick = () => {
    window.location.href = "/signup";
  };

  return (
    <>
      {/* Main Navbar */}
      <div className="navbar">
        <div className="logo">
          <div className="logo-circle">FM</div>
          <div className="logo-text">
            <h1>Fresh Meats</h1>
            <p>Premium Quality Since 1995</p>
          </div>
        </div>

        <nav className="nav-links desktop-only">
          <a className="active">Home</a>
          <a>Categories</a>
          <a>Products</a>
          <a>Contact</a>
        </nav>

        <button className="order-btn desktop-only">Order Now</button>

        {/* Hamburger */}
        <div className="menu-toggle" onClick={() => setOpen(true)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      {/* Overlay */}
      <div
        className={`overlay ${open ? "show" : ""}`}
        onClick={() => setOpen(false)}
      />

      {/* Offcanvas Menu */}
      <div className={`offcanvas ${open ? "show" : ""}`}>
        <div className="offcanvas-header">
          <div className="logo">
            <div className="logo-circle">FM</div>
            <div className="logo-text">
              <h1>Fresh Meats</h1>
              <p>Premium Quality Since 1995</p>
            </div>
          </div>

          <button className="close-btn" onClick={() => setOpen(false)}>
            ✕
          </button>
        </div>

        <nav className="offcanvas-links">
          <a className="active">Home</a>
          <a>Categories</a>
          <a>Products</a>
          <a>Contact</a>
          <button
            type="button"
            className="mobile-order-btn"
            onClick={handleClick}
          >
            Order Now
          </button>{" "}
        </nav>
      </div>
    </>
  );
};

export default MainHeader;
