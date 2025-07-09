export const metadata = {
    title: "My YouTube Channel",
    description: "This is my YouTube channel page",
}

const YouTubeChannel=({params}) => {
    
    return (
        <div className="youtubechannel">
            <h1>My YouTube Channel </h1>
            <p>Welcome to my YouTube channel page!</p>
            <p>This is  youtube channel: {params.slug}</p>
        </div>
    )
}

export default YouTubeChannel;