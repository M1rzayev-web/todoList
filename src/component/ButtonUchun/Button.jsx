import React, {useState} from "react";
import "./button.css";

function Button() {
  const [filteredItems, setFilteredItems] = useState([]);
  const image1 = "/public/images/item-1.jpeg";
  const image2 = "/public/images/item-2.jpeg";
  const image3 = "/public/images/item-3.jpeg";
  const image4 = "/public/images/item-4.jpeg";
  const image5 = "/public/images/item-5.jpeg";
  const image6 = "/public/images/item-6.jpeg";
  const image7 = "/public/images/item-7.jpeg";
  const image8 = "/public/images/item-8.jpeg";
  const image9 = "/public/images/item-9.jpeg";

  const malumot = [
    {
      id: 1,
      title: "Buttermilk Pancakes",
      category: "breakfast",
      price: 15.99,
      Images: image1,
      haqida: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed

`,
    },
    {
      id: 2,
      title: "Diner Double",
      category: "Lunch",
      price: 13.99,
      Images: image2,
      haqida: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed

`,
    },
    {
      id: 3,
      title: "Godzilla Milkshake",
      category: "coctail",
      price: 6.99,
      Images: image3,
      haqida: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed

`,
    },
    {
      id: 4,
      title: "Country Delight",
      category: "breakfast",
      price: 20.99,
      Images: image4,
      haqida: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed

`,
    },
    {
      id: 5,
      title: "Egg Attack",
      category: "Lunch",
      price: 22.99,
      Images: image5,
      haqida: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed

`,
    },
    {
      id: 6,
      title: "Oreo Dream",
      category: "coctailgit aa",
      price: 18.99,
      Images: image6,
      haqida: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed

`,
    },
    {
      id: 7,
      title: "Bacon Overflow",
      category: "breakfast",
      price: 8.99,
      Images: image7,
      haqida: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed

`,
    },
    {
      id: 8,
      title: "American Classic",
      category: "Lunch",
      price: 12.99,
      Images: image8,
      haqida: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut

`,
    },
    {
      id: 9,
      title: "Quarantine Buddy",
      category: "coctail",
      price: 16.99,
      Images: image9,
      haqida: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.

`,
    },
  ];

  const filterItems = (category) => {
    const filtered = malumot.filter((item) => item.category === category);
    setFilteredItems(filtered);
  };

  const itemsToRender = filteredItems.length > 0 ? filteredItems : malumot;

  const ListArray = itemsToRender.map((item) => {
    return (
      <article className="article" key={item.id}>
        <img src={item.Images} alt="" />
        <span>
          <h4>{item.title}</h4>
          <p>${item.price}</p>
        </span>
        <p>{item.haqida}</p>
      </article>
    );
  });

  return (
    <div className="ButtonUchun">
      <h3 className="h3Btn">Our Menu</h3>

      <div className="buttonList">
        <button onClick={() => setFilteredItems([])}>All</button>
        <button onClick={() => filterItems("breakfast")}>Breakfast</button>
        <button onClick={() => filterItems("Lunch")}>Lunch</button>
        <button onClick={() => filterItems("coctail")}>Coctails</button>
     
      </div>

      <section className="List">{ListArray}</section>
    </div>
  );
}

export default Button;
