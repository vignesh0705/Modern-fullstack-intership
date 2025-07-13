const setting=async()=>{
    await new Promise((resolve) => setTimeout(resolve, 2000));
    return(
        <div>
            <h1>Setting page for the Buyer</h1>
        </div>
    )
}

export default setting