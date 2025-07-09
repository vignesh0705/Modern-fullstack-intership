// import Image from "next/image";
// import luffy from "../../../public/luffy.jpg";

export const metadata = {
    title: "My Community",
    description: "This is my community page",
};

const MyCommunity = ({ params }) => {
    return (
        <div className="mycommunitycontainer">
            {/* <Image src={luffy} alt="Luffy"  /> */}
            <div className="mycommunity">
                <h1>My Community</h1>
                <p>Welcome to my community page!</p>
                <p>This is the YouTube Channel: {params.slug}</p>
                <p>This is the Channel: {params.slugs}</p>
            </div>
        </div>
    );
};

export default MyCommunity;
