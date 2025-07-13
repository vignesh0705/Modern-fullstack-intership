

import BuyerNavbar from "@/components/BuyerNavbar";
import { Children } from "react";

const Buyerpage=({children})=>{
    return(
        <div>
           <BuyerNavbar />
           {children}
        </div>
    )
}

export default Buyerpage;