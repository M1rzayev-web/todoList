import React, { useState } from "react";
import { ArrayPhone } from "./magazinArray";
import "./magazin.css";
function Magazin() {
  const [count, setCount] = useState({});

  const inc = (id) => {
    setCount((prevCount) => ({ ...prevCount, [id]: (prevCount[id] || 0) + 1 }));
  };
 const Remove = (id) => {
   setCount((prevCount) => {
     const newCount = { ...prevCount };
     delete newCount[id];
     return newCount;
   });
 };


  const phoneList = ArrayPhone.map((phone) => (
    <article className="Phone-item" key={phone.id}>
      <img src={phone.images} alt={phone.name} />
      <div className="card-div">
        <h3>{phone.name}</h3>
        <span className="price">${phone.price}</span>
        <br />
        <button onClick={() => Remove(phone.id)}>Remove</button>
      </div>
      <div className="sanovchi">
        <button onClick={() => inc(phone.id)}>+</button>
        <p>{count[phone.id] || 0}</p>
        <button
          onClick={() => {
            if (count[phone.id] > 0) {
              setCount((prevCount) => ({
                ...prevCount,
                [phone.id]: prevCount[phone.id] - 1,
              }));
            }
           
          }}
        >
          -
        </button>
      </div>
    </article>
  ));

  const totalItems = Object.values(count).reduce(
    (total, count) => total + count,
    0
  );

  const totalPrice = Object.keys(count).reduce(
    (total, id) =>
      total +
      (count[id] || 0) *
        ArrayPhone.find((phone) => phone.id === Number(id)).price,
    0
  );
  return (
    <div className="Magazin">
      <div className="header">
        <h1>UseReducer</h1>
        <span className="Korzinka">
          <i className="fa-solid fa-cart-shopping"></i>
          <p className="total-phone">{totalItems}</p>
        </span>
      </div>
      <div className="main">
        <h3>Your Bag</h3>

        {phoneList}
      </div>
      <div className="Narxlar">
        <h3>Total</h3>
        <p className="qiymatPrice">${totalPrice}</p>
      </div>
      <button
        className="clearAll"
        onClick={() => {
          if (phoneList.length > 0) {
            return "";
          }
        }}
      >
        Clear All
      </button>
    </div>
  );
}

export default Magazin;
