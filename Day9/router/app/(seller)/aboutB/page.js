const About=async()=>{
    await new Promise((resolve) => setTimeout(resolve, 2000));
    return(
        <div>
            <h1>About page for the seller</h1>
        </div>
    )
}

export default About;