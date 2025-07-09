const HomePage = () => {
  return (
    <div className="maincontainer">
      <div className='homecontainer'>
        <h1>Build social profiles and gain revenue profits</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam id repellendus nam quas dolor quia expedita, repellat, eius illum autem sunt vitae ut aliquid cumque perferendis iusto facere sed nulla!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero laudantium totam in, repudiandae beatae et nostrum molestiae, eaque adipisci non voluptas repellat magnam error eligendi provident optio deserunt nulla aperiam!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt accusamus impedit veritatis optio inventore dignissimos, rerum error quas ad repellat tempora distinctio dolorum in. Sint asperiores deleniti reiciendis nihil cumque?</p>
     </div>
      <div className='formcontainer'>
       <h1>Sign Up</h1>
       <form>
        <input type="text" placeholder="username" /><br />
        <input type="email" placeholder="Enter your email" /><br />
        <input type="password" placeholder="Enter your password" /><br />
        <input type="password" placeholder="Confirm your password" /><br />
        <button type="submit">Submit</button>
       </form>
      </div>
    </div>
  );
};

export default HomePage;
