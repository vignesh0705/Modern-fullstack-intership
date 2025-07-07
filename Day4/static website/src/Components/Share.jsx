import React from 'react'
import '../Styles/Share.css'
import image from '../images/share.jpg'

function Share() {
  return (
    <div className='sharecontainer'>
      <h1>Share</h1>
      <p>Share your thoughts and ideas with the world.</p>
      <button className='share-button'>Start Sharing</button>

      <div className='share-container'>
        <img src={image} alt='Share' />
        <div className='share-content'>
          <h1>Share what you want</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed laudantium repudiandae voluptatum cumque modi ad, dolores, adipisci odio at quia voluptas nulla accusamus aperiam omnis placeat fugiat, saepe optio vitae!
            Ad, asperiores facere exercitationem sequi expedita est quam voluptatibus incidunt quisquam temporibus hic aliquam sapiente, neque repellendus quos eos in ipsam eaque error culpa, unde nisi dicta! Vero, voluptatem possimus.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum nisi commodi autem sint quae libero, laborum perferendis nostrum mollitia odit perspiciatis eaque doloremque tenetur quos, dolorum quod molestias. Minima, alias.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, voluptatum.</p>
        </div>
      </div>
    </div>
  )
}

export default Share
