import Image from "next/image";
// import luffy from "@/public/images/luffy.jpg"; 

export const metadata = {
  title: "My Community",
  description: "This is my community page",
};

const MyCommunity = ({ params }) => {
  return (
    <div className={"mycommunitycontainer"}>
      <div className={"banner"}>
        {/* <Image src={luffy} alt="Luffy" className={"image"} priority /> */}
        <div className={"overlay"}>
          <h1>My Community</h1>
        </div>
      </div>

      <div className={"content"}>
        <p>Welcome to my community page!</p>
        <p>This is the YouTube Channel: {params.slug}</p>
        <p>This is the Channel: {params.slugs}</p>
      </div>
    </div>
  );
};

export default MyCommunity;
