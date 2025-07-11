import Navbar from "@/components/Navbar";

const foodData = [
  { id: 1, name: "Margherita Pizza", img: "https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395_1280.jpg" },
  { id: 2, name: "Cheese Burger", img: "https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_1280.jpg" },
  { id: 3, name: "Creamy Pasta", img: "https://img.freepik.com/free-photo/pasta-spaghetti-with-shrimps-tomato-sauce_2829-14218.jpg" },
];

const Food = ({ params }) => {
  const food = foodData.find(item => item.id.toString() === params.id);

  if (!food) {
    return (
      <div>
        <Navbar />
        <h2 style={{ padding: "20px" }}>Food item not found</h2>
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <div style={{ padding: "20px" }}>
        <h1>{food.name}</h1>
        <img src={food.img} alt={food.name} style={{ width: "400px", borderRadius: "10px" }} />
      </div>
    </div>
  );
};

export default Food;
