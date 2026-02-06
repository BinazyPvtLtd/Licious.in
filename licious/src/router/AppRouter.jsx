import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "../pages/Homepage";
import AppLayout from "../layouts/AppLayout";
import Product from "../pages/Product";
import Contact from "../pages/Contact";
import Categories from "../pages/Cart";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import ScrollToTop from "../HelperFunction/ScrollToTOp";
import Customerform from "../components/forms/Customerform";
import Orderform from "../components/forms/Orderform";
// import Productform from "../components/forms/Productform";
// import Orderform from "../components/forms/Orderform";
import SignUp from "../pages/Auth/SignUp";
import SignIn from "../pages/Auth/SignIn";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Homepage />} />
          <Route path="/products" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/order" element={<Orderform />} />
          <Route path="/customer" element={<Customerform />} />
          {/* <Route path="/product" element={<Produc />} /> */}
        </Route>

        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
