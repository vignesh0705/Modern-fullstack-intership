import Image from "next/image";
import banner from "@/public/background.jpg";
import logo from "@/public/luffy.jpg";

export const metadata = {
  title: "My YouTube Channel",
  description: "This is my YouTube channel page",
};

const YouTubeChannel = ({ params }) => {
  return (
    <div className="youtubechannel">
      <div className="bannerContainer">
        <Image src={banner} alt="Banner" className="banner" priority />
        <div className="overlayText">
          <h2>1M+ subscribers</h2>
        </div>
      </div>

      <div className="profileSection">
        <Image src={logo} alt="Logo" className="logo" />
        <div className="details">
          <h1>Code Tech</h1>
          <p>@codetech · 2.01M subscribers · 1.1K videos</p>
          <p>We make videos about technology and programming.</p>
          <p>This is youtube channel: {params.slug}</p>
          <button className="subscribe">Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default YouTubeChannel;
