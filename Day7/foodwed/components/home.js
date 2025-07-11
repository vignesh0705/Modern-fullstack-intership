"use client";

import React, { useRef } from "react";
import { useRouter } from "next/navigation";
import Card from "./Card";

const Homepage = () => {
  const scrollRef = useRef(null);

const foodData = [
  {
    id: 1,
    img: "https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395_1280.jpg",
    name: "Margherita Pizza"
  },
  {
    id: 2,
    img: "https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_1280.jpg",
    name: "Cheese Burger"
  },
  {
    id: 3,
    img: "https://img.freepik.com/free-photo/pasta-spaghetti-with-shrimps-tomato-sauce_2829-14218.jpg",
    name: "Creamy Pasta"
  },
  {
    id: 4,
    img: "https://img.freepik.com/free-photo/indian-biryani-with-chicken-wooden-background_123827-20761.jpg",
    name: "Chicken Biryani"
  },
  {
    id: 5,
    img: "https://img.freepik.com/free-photo/japanese-salmon-sushi-roll-with-caviar_1150-26516.jpg",
    name: "Salmon Sushi"
  },
  {
    id: 6,
    img: "https://img.freepik.com/free-photo/vanilla-ice-cream-scoops-bowl_114579-2655.jpg",
    name: "Vanilla Ice Cream"
  },
  {
    id: 7,
    img: "https://cdn.pixabay.com/photo/2014/10/19/20/59/sandwich-494706_1280.jpg",
    name: "Grilled Sandwich"
  },
  {
    id: 8,
    img: "https://img.freepik.com/free-photo/noodles-with-vegetables_2829-14415.jpg",
    name: "Spicy Noodles"
  },
  {
    id: 9,
    img: "https://img.freepik.com/free-photo/beef-tacos-with-salsa_140725-2634.jpg",
    name: "Beef Taco"
  },
  {
    id: 10,
    img: "https://cdn.pixabay.com/photo/2015/04/08/13/13/food-712665_1280.jpg",
    name: "Chocolate Cake"
  }
];


  const scrollLeft = () => {
    scrollRef.current.scrollBy({
      left: -300,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({
      left: 300,
      behavior: "smooth",
    });
  };
  
   const handleCardClick = (id) => {
    router.push(`/homepage/${id}`);
  };

  return (
    <div className="home-container">
      <div className="home-header">
        <h3>Top restaurant chains in Noida</h3>
        <div className="button-group">
          <button onClick={scrollLeft} className="left-button">{"<"}</button>
          <button onClick={scrollRight} className="right-button">{">"}</button>
        </div>
      </div>

      <div className="home-items" ref={scrollRef}>
        {foodData.map(item => (
          <Card key={item.id} img={item.img} name={item.name} />
        ))}
      </div>
    </div>
  );
};

export default Homepage;
