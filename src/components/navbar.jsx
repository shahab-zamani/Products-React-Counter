import React, { Component } from 'react';
import  'bootstrap/dist/css/bootstrap.min.css';


class Navbar extends Component {
    render() { 
        return ( 
            <nav className='navbar navbar-bg navbar-light '>
            <div className="container-fluid "></div>
            <a href='#'   className='navbar-brand'> Navbar 5 </a>
            </nav>
        );
    }
}
 
export default Navbar;