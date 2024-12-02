import "./App.css";
import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./structure/Login";
import Signup from "./structure/Signup";
import Cart from "./Cart";
import Header from "./structure/Header";
import Footer from "./structure/Footer";
import Overview from "./structure/Overview";
import About from "./structure/about";
import Contact from "./structure/contact";
import Productdetails from "./structure/Productdetails";
import Checkout from "./structure/Checkout";

function App() {
  const [savedData, setSavedData] = React.useState();
  const [cart, setCart] = React.useState(0);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(
          `https://api.unsplash.com/photos?query=fashion&per_page=10`,
          {
            headers: {
              Authorization:
                "Client-ID JWaba-oKF0FaLeccIragCY_7WInUQM-gXRpPZMpJ_qo",
            },
          }
        );

        const data = await response.json();
        console.log(data);
        setSavedData(data);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };
    fetchPosts();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        {/* Routes without Header and Footer */}
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Routes with Header and Footer */}
        <Route
          path="*"
          element={
            <>
              <Header />
              <Routes>
                <Route
                  path="/header"
                  element={<Header cart={Cart} setCart={setCart} />}
                />
                <Route
                  path="/overview"
                  element={<Overview savedData={savedData} />}
                />
                <Route path="/cart" element={<Cart />} />
                <Route
                  path="/about"
                  element={<About savedData={savedData} />}
                />
                <Route path="/contact" element={<Contact />} />
                <Route
                  path="/productdetails/:id"
                  element={<Productdetails />}
                />
                <Route path="/checkout" element={<Checkout />} />
                {/* Other routes */}
              </Routes>
              <Footer />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
