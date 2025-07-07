import React from 'react'
import '../Styles/Explore.css'
import ima from '../images/explore.jpg'

function Explore() {
  return (
    <>
      <div className='explorecontainer'>
        <h1>Explore</h1>
        <p>Discover new opportunities and connect with others.</p>
        <button className='explore-button'>Find out</button>
      </div>

      <div className='explore-container'>
        <img src={ima} alt="Explore" />

        <div className='explore-content'>
          <h1>Explore & Connect</h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae, vel sapiente incidunt minima nostrum vitae maiores molestias, velit labore rerum excepturi, 
            dignissimos inventore dolorem quos quis corrupti. Vel, iste cupiditate.</p>

          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus, consectetur voluptatum libero fuga quae amet veritatis harum. Sequi unde sint, nobis maxime distinctio labore est officiis? Ipsa dolorem deserunt harum.
            Veniam labore vero similique ab magni, eum nulla porro enim perspiciatis eligendi omnis incidunt. Alias doloribus, sunt quaerat adipisci voluptatibus quisquam dolor, veritatis facilis impedit nisi hic ea eaque aut.</p>

          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa dolorem maiores facere perspiciatis tenetur ratione enim ex recusandae debitis velit beatae illum, quibusdam sit dicta in architecto harum eius! Cum.
            Quos ratione consequatur at pariatur natus magnam! Et ut quis reiciendis id explicabo exercitationem hic cupiditate illum tempore minima rem voluptatem eaque quos magni ipsam, ad minus dolor, architecto accusamus.</p>
        </div>
      </div>
    </>
  )
}

export default Explore
