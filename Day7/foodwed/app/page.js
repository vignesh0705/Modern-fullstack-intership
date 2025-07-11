import Dish from "@/components/Dish";
import Navbar from "@/components/Navbar";
import Homepage from "@/components/home";

import Image from "next/image";


export default function Home() {
  return (
    <div>
      <Navbar />
      <Homepage />
      <Dish/>
    </div>
  );
}
