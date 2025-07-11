import React from "react";
import DishBox from "./DishBox";


const Dish = () => {
  const dataSet = [
  {
    id: 1,
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv9P6yCSHyTSC7V98SEc16fk7BeyJ37BNh8A&s",
    foodname: "Idli",
    desc: "South Indian steamed rice cakes",
    price: "₹250 for two",
  },
  {
    id: 2,
    img: "https://www.awesomecuisine.com/wp-content/uploads/2009/06/Plain-Dosa.jpg",
    foodname: "Dosa",
    desc: "Crispy rice crepe with chutney",
    price: "₹300 for two",
  },
  {
    id: 3,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxJXAP9ycXU4GkxtlkVyWctDX6RhoxenQynw&s",
    foodname: "Poori Bhaji",
    desc: "Fried bread with potato curry",
    price: "₹280 for two",
  },
  {
    id: 4,
    img: "https://www.livofy.com/health/wp-content/uploads/2023/03/fq5cs53_biryani-doubletree-by-hilton_625x300_12_April_22-1024x576.jpg",
    foodname: "Veg Biryani",
    desc: "Spiced rice with vegetables",
    price: "₹350 for two",
  },
  {
    id: 5,
    img: "https://recipesaresimple.com/wp-content/uploads/2021/07/paneer-butter-masala.jpg",
    foodname: "Paneer Butter Masala",
    desc: "Cottage cheese in creamy tomato gravy",
    price: "₹400 for two",
  },
  {
    id: 6,
    img: "https://amritsr.com/wp-content/uploads/2021/04/cholle-bhature.jpeg",
    foodname: "Chole Bhature",
    desc: "Spicy chickpeas with fried bread",
    price: "₹320 for two",
  },
  {
    id: 7,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRijCTd8ltjSYv6HqPTVPeVZCmYvOd7OI73ImAimsHwyZFO3qeSDcyK6N3Nu4sYqoA0qNg&usqp=CAU",
    foodname: "Rajma Chawal",
    desc: "Kidney beans curry with rice",
    price: "₹300 for two",
  },
  {
    id: 8,
    img: "https://vismaifood.com/storage/app/uploads/public/8b4/19e/427/thumb__1200_0_0_0_auto.jpg",
    foodname: "Masala Dosa",
    desc: "Stuffed dosa with spiced potatoes",
    price: "₹320 for two",
  },
  {
    id: 9,
    img: "https://bing.com/th?id=OSK.9caa26b65069070784797fc1c36b4c47",
    foodname: "Aloo Paratha",
    desc: "Stuffed flatbread with potato filling",
    price: "₹280 for two",
  },
  {
    id: 10,
    img: "https://i1.wp.com/vegecravings.com/wp-content/uploads/2018/02/Medu-Vada-Recipe-Step-By-Step-Instructions.jpg?fit=2357%2C1885&quality=65&strip=all&ssl=1",
    foodname: "Sambar Vada",
    desc: "Lentil fritters soaked in sambar",
    price: "₹260 for two",
  },
  {
    id: 11,
    img: "https://tse4.mm.bing.net/th/id/OIP.VQSf0GuP2KOhHVE1xQuFwwHaFj?rs=1&pid=ImgDetMain&o=7&rm=3",
    foodname: "Hyderabadi Biryani",
    desc: "Aromatic rice with spices and vegetables",
    price: "₹400 for two",
  },
  {
    id: 12,
    img: "https://www.cookwithmanali.com/wp-content/uploads/2020/04/Punjabi-Kadhi-Pakora-676x1024.jpg",
    foodname: "Kadhi Pakora",
    desc: "Gram flour dumplings in yogurt curry",
    price: "₹280 for two",
  },
  {
    id: 13,
    img: "https://www.indianhealthyrecipes.com/wp-content/uploads/2020/09/baingan-bharta-recipe.jpg",
    foodname: "Baingan Bharta",
    desc: "Smoky mashed eggplant curry",
    price: "₹300 for two",
  },
  {
    id: 14,
    img: "https://www.24mantra.com/wp-content/uploads/2021/03/824-x-465-26.png",
    foodname: "Dal Tadka",
    desc: "Yellow lentils tempered with spices",
    price: "₹270 for two",
  },
  {
    id: 15,
    img: "https://www.thestatesman.com/wp-content/uploads/2019/07/pav-bhaji.jpg",
    foodname: "Pav Bhaji",
    desc: "Spicy mashed vegetables with buttered buns",
    price: "₹320 for two",
  },
  {
    id: 16,
    img: "https://cdn.shopify.com/s/files/1/0551/8009/9722/files/4_b1ca596e-51a9-4fae-b067-071a80f26a14_480x480.png?v=1716792199",
    foodname: "Tandoori Roti",
    desc: "Whole wheat flatbread cooked in tandoor",
    price: "₹200 for two",
  },
  {
    id: 17,
    img: "https://tse1.mm.bing.net/th/id/OIP.rR8P96t7PCOKMOzirDIwxgHaLH?rs=1&pid=ImgDetMain&o=7&rm=3",
    foodname: "Vegetable Korma",
    desc: "Mixed vegetables in creamy gravy",
    price: "₹350 for two",
  },
  {
    id: 18,
    img: "https://www.tablefortwoblog.com/wp-content/uploads/2022/01/gobi-manchurian-recipe-photo-tablefortwoblog-5-scaled.jpg",
    foodname: "Gobi Manchurian",
    desc: "Crispy cauliflower in Indo-Chinese sauce",
    price: "₹300 for two",
  },
  {
    id: 19,
    img: "https://rakskitchen.net/wp-content/uploads/2009/05/methi-thepla.jpg",
    foodname: "Methi Thepla",
    desc: "Fenugreek flatbread from Gujarat",
    price: "₹250 for two",
  },
  {
    id: 20,
    img: "https://bing.com/th?id=OSK.f9f6b3ac56d65e6136f84cb09b0c972f",
    foodname: "Rava Upma",
    desc: "Semolina cooked with vegetables and spices",
    price: "₹240 for two",
  },
  {
    id: 21,
    img: "https://nestle.fitterfly.in/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBdjhiIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--3b885475d877993e88874c79bc03f98b1bb0b52f/155-Khasta_Kachori.webp",
    foodname: "Kachori",
    desc: "Spicy stuffed pastry from Rajasthan",
    price: "₹260 for two",
  },
  {
    id: 22,
    img: "https://tse1.mm.bing.net/th/id/OIP.JRNTvNL9h7s5y_fau4wcOwHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
    foodname: "Dhokla",
    desc: "Steamed fermented gram flour cake",
    price: "₹240 for two",
  },
  {
    id: 23,
    img: "https://tse2.mm.bing.net/th/id/OIP.Q9Au0pSwH8dBYHEpXmfO6gHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
    foodname: "Malai Kofta",
    desc: "Vegetable dumplings in rich cream sauce",
    price: "₹380 for two",
  },
  {
    id: 24,
    img: "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/12/jeera-rice-recipe.jpg",
    foodname: "Jeera Rice",
    desc: "Cumin-flavored basmati rice",
    price: "₹220 for two",
  },
];

  return (
    <div className="dishs">
      <div className="dish_title">
        <h2>Restaurants with online food delivery in noida</h2>
      </div>
      <div className="dish">
        {dataSet.map((item) => (
          <DishBox
            key={item.id}
            dish_img={item.img}
            dish_name={item.foodname}
            dish_des={item.desc}
            dish_price={item.price}
          />
        ))}

        {/* <DishBox  dish_img={img} dish_name="idli" dish_des="jello this is idli" dish_price="2000" /> */}
      </div>
    </div>
  );
};

export default Dish;