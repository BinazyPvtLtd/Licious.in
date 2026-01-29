import { useState } from "react";

const MainHeader = () => {
  const [open, setOpen] = useState(false);

  return (
   <>
   {/* <!-- Main Navbar --> */}
  <div class="navbar">
    <div class="logo">
      <div class="logo-circle">FM</div>
      <div class="logo-text">
        <h1>Fresh Meats</h1>
        <p>Premium Quality Since 1995</p>
      </div>
    </div>

    <nav class="nav-links">
      <a class="active">Home</a>
      <a>Categories</a>
      <a>Products</a>
      <a>Contact</a>
    </nav>

    <button class="order-btn">Order Now</button>
  </div>
   </>
  );
};

export default MainHeader;
