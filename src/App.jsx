import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Products from "./Pages/Products/Products";
import Contact from "./Pages/contact/Contact";
import SingleProduct from "./Pages/SingleProduct/SingleProduct";
import Cart from "./Pages/Cart/Cart";
import ErrorPage from "./Pages/Error/ErrorPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SignIn from "./Pages/Auth/SignIn";
import SignUp from "./Pages/Auth/SignUp";
import ForgotPassword from "./components/ForgotPassword";
import Order from "./Pages/Order/Order";
import OrderDetails from "./Pages/Order/OrderDetails";
import MyOrders from "./Pages/Order/MyOrders";
function App() {
  return (
    <main className="overflow-x-hidden bg-gray-200">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/products" element={<Products />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/product/:id" element={<SingleProduct />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="/signup" element={<SignUp />} />
          <Route exact path="/signin" element={<SignIn />} />
          <Route exact path="/order" element={<Order />} />
          <Route exact path="/myorders" element={<MyOrders />} />
          <Route
            exact
            path="/order_details/:orderId"
            element={<OrderDetails />}
          />
          <Route
            exact
            path="/password/reset/:token"
            element={<ForgotPassword />}
          />
          <Route exact path="*" element={<ErrorPage />} />
        </Routes>
        <hr className="mx-5 " />
        <Footer />
      </Router>
    </main>
  );
}

export default App;
