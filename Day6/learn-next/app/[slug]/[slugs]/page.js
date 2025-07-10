import Image from "next/image";
import Channelcomp from "@/components/Channelcomp"; 
import background from "@/public/background.jpg";

export const metadata = {
  title: "My Community",
  description: "This is my community page",
};

const MyCommunity = ({ params }) => {
  return (
    <div className={"mycommunitycontainer"}>
      <div className={"banner"}>
        <Image
          src={background}
          alt="Community Banner"
          className={"bannerImage"}
          priority
        />
        <div className={"overlay"}>
          <h1>My Community</h1>
        </div>
      </div>

      <div className={"content"}>
        <p>Welcome to my community page!</p>
        <p>This is the YouTube Channel: {params.slug}</p>
        <p>This is the Channel: {params.slugs}</p>
        <Channelcomp />
        <Error />
      </div>
    </div>
  );
};

export default MyCommunity;
