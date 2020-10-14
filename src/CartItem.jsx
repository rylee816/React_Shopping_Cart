import React, { useState } from "react";

function CartItem({ id, name, price, qty, updateQty }) {
  const [amount, setAmount] = useState(qty);

  function increase() {
    setAmount(amount + 1);
    updateQty(id, qty + 1);
    if (qty === 5) {
      alert("You don't need that many, fatass.");
    }
  }

  function decrease() {
    setAmount(amount - 1);
    if (qty > 0) {
      updateQty(id, qty - 1);
    }
    amount === 0 && setAmount(0);
  }

  return (
    <div className="CartItem">
      <h5>
        <b>{name}</b>
      </h5>
      <h5> ${price}</h5>
      <div className="item-buttons">
        <button onClick={increase} className="item-button">
          +
        </button>
        <h5>{amount}</h5>
        <button onClick={decrease} className="item-button">
          -
        </button>
      </div>
      <h5>
        Subtotal <span>${(price * amount).toFixed(2)}</span>
      </h5>
    </div>
  );
}

export default CartItem;
