import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/CartSlice";

function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const [addedItems, setAddedItems] = useState([]);

  const plants = {
    "Indoor Plants": [
      { id: 1, name: "Snake Plant", price: 15, image: "https://via.placeholder.com/150" },
      { id: 2, name: "Spider Plant", price: 12, image: "https://via.placeholder.com/150" },
      { id: 3, name: "Peace Lily", price: 18, image: "https://via.placeholder.com/150" },
      { id: 4, name: "Aloe Vera", price: 10, image: "https://via.placeholder.com/150" },
      { id: 5, name: "ZZ Plant", price: 20, image: "https://via.placeholder.com/150" },
      { id: 6, name: "Pothos", price: 14, image: "https://via.placeholder.com/150" },
    ],

    Succulents: [
      { id: 7, name: "Jade Plant", price: 11, image: "https://via.placeholder.com/150" },
      { id: 8, name: "Echeveria", price: 13, image: "https://via.placeholder.com/150" },
      { id: 9, name: "Haworthia", price: 9, image: "https://via.placeholder.com/150" },
      { id: 10, name: "Burro's Tail", price: 16, image: "https://via.placeholder.com/150" },
      { id: 11, name: "Sedum", price: 8, image: "https://via.placeholder.com/150" },
      { id: 12, name: "Panda Plant", price: 12, image: "https://via.placeholder.com/150" },
    ],

    "Flowering Plants": [
      { id: 13, name: "Orchid", price: 25, image: "https://via.placeholder.com/150" },
      { id: 14, name: "Anthurium", price: 22, image: "https://via.placeholder.com/150" },
      { id: 15, name: "Begonia", price: 18, image: "https://via.placeholder.com/150" },
      { id: 16, name: "African Violet", price: 17, image: "https://via.placeholder.com/150" },
      { id: 17, name: "Kalanchoe", price: 15, image: "https://via.placeholder.com/150" },
      { id: 18, name: "Cyclamen", price: 19, image: "https://via.placeholder.com/150" },
    ],
  };

  const handleAddToCart = (plant) => {
    dispatch(addToCart(plant));
    setAddedItems([...addedItems, plant.id]);
  };

  const totalCartItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <div>
      {/* Navbar */}
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "15px",
          background: "#e8f5e9",
        }}
      >
        <div>
          <a href="/">Home</a> | <a href="/plants">Plants</a> |{" "}
          <a href="/cart">Cart</a>
        </div>

        <div>
          🛒 Cart ({totalCartItems})
        </div>
      </nav>

      <h1>Paradise Nursery Plants</h1>

      {Object.keys(plants).map((category) => (
        <div key={category}>
          <h2>{category}</h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "20px",
            }}
          >
            {plants[category].map((plant) => (
              <div
                key={plant.id}
                style={{
                  border: "1px solid #ddd",
                  padding: "10px",
                  textAlign: "center",
                }}
              >
                <img
                  src={plant.image}
                  alt={plant.name}
                  width="150"
                  height="150"
                />

                <h3>{plant.name}</h3>

                <p>${plant.price}</p>

                <button
                  onClick={() => handleAddToCart(plant)}
                  disabled={addedItems.includes(plant.id)}
                >
                  {addedItems.includes(plant.id)
                    ? "Added to Cart"
                    : "Add to Cart"}
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
