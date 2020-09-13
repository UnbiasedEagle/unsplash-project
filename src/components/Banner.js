import React from 'react';
import './Banner.css'

const Banner = () => {
    return ( 
        <div className='banner'>
            <div className="banner__content container">
                <h1>Unsplash</h1>
                <p>The internet source of freely usuable images. <br/>Powered by creators everywhere</p>
                <div className="banner__input">
                    <i className="fas fa-search"></i><input type="text" placeholder='Search for images' />
                </div>
               
            </div>
        </div>
     );
}
 
export default Banner;