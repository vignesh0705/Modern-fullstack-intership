const Home=async()=>{
    await new Promise((resolve) => setTimeout(resolve, 2000));
    return(
        <div>
            <h1>Home page for the Buyer</h1>
        </div>
    )
}

export default Home;