import React from "react";
import "./styles.css";
import Cart from "./Cart";

const items = [
  {
    id: 1,
    name: "Coffee",
    price: 11.35,
    qty: 0
  },
  {
    id: 2,
    name: "Bread",
    price: 3.69,
    qty: 0
  },
  {
    id: 3,
    name: "Milk",
    price: 3.2,
    qty: 0
  },
  {
    id: 4,
    name: "Eggs",
    price: 2.75,
    qty: 0
  },
  {
    id: 5,
    name: "Butter",
    price: 4.15,
    qty: 0
  }
];

export default function App() {
  return (
    <div className="App">
      <Cart initialItems={items} />
    </div>
  );
}
