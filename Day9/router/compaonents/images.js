import Image from "next/image";

const ImageA=() => {
    return(
        <>
          <img src="/globe.svg" style={{width:"100px" , height:"100px" }}></img>
          <Image src="/globe.svg" alt="" width={200} height={100}></Image>
        </>
    )
}

export default ImageA