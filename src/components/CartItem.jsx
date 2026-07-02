import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
} from "../redux/CartSlice";

function CartItem() {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.items);

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleCheckout = () => {
    alert("Coming Soon");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Shopping Cart</h1>

      <h2>Total Cart Amount: ${totalAmount.toFixed(2)}</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cartItems.map((item) => (
          <div
            key={item.id}
            style={{
              border: "1px solid #ccc",
              marginBottom: "15px",
              padding: "15px",
              display: "flex",
              alignItems: "center",
              gap: "20px",
            }}
          >
            <img
              src={item.image}
              alt={item.name}
              width="100"
              height="100"
            />

            <div>
              <h3>{item.name}</h3>

              <p>Unit Price: ${item.price}</p>

              <p>Quantity: {item.quantity}</p>

              <p>
                Total Cost: ${(item.price * item.quantity).toFixed(2)}
              </p>

              <button
                onClick={() => dispatch(increaseQuantity(item.id))}
              >
                +
              </button>

              <button
                onClick={() => dispatch(decreaseQuantity(item.id))}
                style={{ marginLeft: "5px" }}
              >
                -
              </button>

              <button
                onClick={() => dispatch(removeFromCart(item.id))}
                style={{ marginLeft: "10px" }}
              >
                Delete
              </button>
            </div>
          </div>
        ))
      )}

      <div style={{ marginTop: "20px" }}>
        <button onClick={handleCheckout}>
          Checkout
        </button>

        <a href="/plants" style={{ marginLeft: "15px" }}>
          <button>Continue Shopping</button>
        </a>
      </div>
    </div>
  );
}

export default CartItem;
