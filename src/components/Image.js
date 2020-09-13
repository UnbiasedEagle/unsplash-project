import React from 'react';
import './Image.css'

const Image = ({image}) => {
    return ( 
        <div className='col-md-6'>
            <img className='image' src={image.urls.thumb} alt={image.description}/>
        </div>
     );
}
 
export default Image;