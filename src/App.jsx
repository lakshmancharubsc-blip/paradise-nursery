import React, { useState } from "react";
import "./App.css";
import ProductList from "./components/ProductList";

function App() {
  const [showProductList, setShowProductList] = useState(false);

  return (
    <div>
      {!showProductList ? (
        <div className="background-image">
          <div className="landing-page">
            <div>
              <h1>Paradise Nursery</h1>

              <p>
                Welcome to Paradise Nursery, your destination for beautiful
                indoor plants and gardening essentials.
              </p>

              <button
                className="get-started-btn"
                onClick={() => setShowProductList(true)}
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      ) : (
        <ProductList />
      )}
    </div>
  );
}

export default App;
