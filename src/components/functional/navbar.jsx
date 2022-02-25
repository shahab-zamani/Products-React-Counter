import React, { Component } from 'react';
import  'bootstrap/dist/css/bootstrap.min.css';
import Products from './products';


const Navbar = (props) => {
    return ( 
        <nav className='navbar navbar-bg navbar-light '>            

        <div className="container-fluid"></div>
        <a href='#'   className='navbar-brand'> Navbar {calculateSum()} </a>
        </nav>
    );

    
    function calculateSum(){ 
        let sum = 0;
       props.products.forEach( p => {
            sum += p.count ;            
        })
        return sum 
    
    }

}
    
export default Navbar;