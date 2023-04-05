import React, {useState} from "react";
import "./magazin.css";
import { ArrayPhone } from "./magazinArray";
function Magazin() {
    const [count, setCount] = useState(0);
    const [countKor,setCountKor]=useState(0)
    const [narx, setNarx] = useState(100)
    const array = ArrayPhone.map((item) => (
      <article className="Phone-item" key={item.id}>
        <img
          src={item.images}
          alt="phone"
        />
        <div className="card-div">
          <h3>Google pixel</h3>

          <span className="price">${item.price}</span>
          <br />
          <button className="remove-btn">remove</button>
        </div>
        <div className="sanovchi">
          <button className="qoshuvchi1" onClick={() => setCount(count + 1)}>
            <i class="fa-solid fa-circle-arrow-up"></i>
          </button>
          <p>{count}</p>
          <button
            className="ayiruvchi1"
            onClick={() => (count > 0 ? setCount(count - 1) : null)}
          >
            <i class="fa-solid fa-circle-arrow-down"></i>
          </button>
        </div>
      </article>
    ));
    
  return (
    <div className="Magazin">
      <div className="header">
        <h1>UseReducer</h1>
        <span className="Korzinka">
          <i class="fa-solid fa-cart-shopping"></i>
          <p className="total-phone">{countKor+count}</p>
        </span>
      </div>
      <div className="main">
              <h3>Your Bag</h3>
              
       
              {array}
      </div>
      <div className="Narxlar">
        <h3>Total</h3>
              <p className="qiymatPrice">${narx*count}</p>
      </div>
      <button className="clearAll">Clear All</button>
    </div>
  );
}

export default Magazin;
