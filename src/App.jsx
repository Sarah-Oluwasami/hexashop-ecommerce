import "./App.css";
import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
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
  const [savedData, setSavedData] = useState();
  const [cart, setCart] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn") === "true";
    setIsLoggedIn(loggedIn);
  }, []);

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("email");
  };

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
        console.error("Error fetching data:", error);
      }
    };
    fetchPosts();
  }, []);

  return (
    <BrowserRouter>
      <div>
        {isLoggedIn && (
          <div>
            <button onClick={handleLogout} className="absolute top-2 z-20 left-20 border-slate-500 border-2 rounded-lg px-1 sm:left-2 bg-white">Logout</button>
          </div>
        )}
        <Routes>
          {!isLoggedIn ? (
            <>
              <Route
                path="/login"
                element={<Login setIsLoggedIn={setIsLoggedIn} />}
              />
              <Route path="/signup" element={<Signup />} />
              <Route path="*" element={<Navigate to="/login" />} />
            </>
          ) : (
            <>
              <Route
                path="*"
                element={
                  <>
                    <Header cart={cart} setCart={setCart} />
                    <Routes>
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
                      <Route path="*" element={<Navigate to="/overview" />} />
                    </Routes>
                    <Footer />
                  </>
                }
              />
            </>
          )}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
