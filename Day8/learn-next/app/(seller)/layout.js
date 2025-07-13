


import SellerNavbar from "@/components/SellerNavbar";
import { Children } from "react";

const sellerpage=({children})=>{
    return(
        <div>
           <SellerNavbar/>
           {children}
        </div>
    )
}

export default sellerpage;