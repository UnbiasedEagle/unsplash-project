import React from 'react';

const Navbar = () => {
    return ( 
        <nav className='navbar navbar-expand-lg bg-light navbar-light'>
            
                <a href='/' className='navbar-brand mx-2'>
                    <i className="fas fa-camera fa-2x"></i>
                </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mobile-nav" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
                <div className='collapse navbar-collapse' id='mobile-nav'>
                    <ul className='ml-auto navbar-nav'>
                        <li className='nav-item mx-2'>
                            <a href="/" className='nav-link'>Home</a>
                        </li>
                        <li className='nav-item mx-2'>
                            <a href="/" className='nav-link'>Categories</a>
                        </li>
                        <li className='nav-item mx-2'>
                            <a href="/" className='nav-link'>Explore</a>
                        </li>
                    <li className='nav-item mx-2'>
                        <a href="/" style={{color:'#fff'}} className='nav-link btn btn-secondary btn'>Upload a Photo</a>
                    </li>
                    </ul>
                </div>
           
        </nav>
     );
}
 
export default Navbar;
