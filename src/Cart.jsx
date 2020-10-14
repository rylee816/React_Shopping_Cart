import React, { useState, useEffect } from "react";
import CartItem from "./CartItem";

function Cart({ initialItems }) {
  const initialState = JSON.parse(window.localStorage.getItem("items"));
  const [items, setItems] = useState(initialState || initialItems);

  useEffect(() => {
    window.localStorage.setItem("items", JSON.stringify(items));
    console.log(...items);
  }, [items]);

  function updateQty(id, newQty) {
    const newItems = items.map((item) => {
      if (item.id === id) {
        return { ...item, qty: newQty };
      }
      return item;
    });
    setItems(newItems);
  }

  const grandTotal = items.reduce((total, item) => {
    return total + item.qty * item.price;
  }, 0);

  return (
    <div className="Cart">
      <h1 className="header">Shopping Cart</h1>
      <hr></hr>
      {items.map((item, index) => {
        return (
          <div>
            <CartItem
              {...item}
              updateQty={updateQty}
              index={index}
              key={index}
            />
          </div>
        );
      })}
      <div className="checkout-container">
        <h3 className="subtotal">
          Total <span>${grandTotal.toFixed(2)}</span>
        </h3>
        <button className="checkout">Checkout</button>
      </div>
    </div>
  );
}

export default Cart;
