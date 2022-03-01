import React, { Component } from 'react';
import  'bootstrap/dist/css/bootstrap.min.css';
import Products from './products';
import ProductContext from './../Context/products';


class Navbar extends Component {
    static contextType = ProductContext;
    render() { 
        return ( 
            <nav className='navbar navbar-bg navbar-light '>            

            <div className="container-fluid"></div>
            <a href='#'   className='navbar-brand'> Navbar {this.calculateSum()} </a>
            </nav>
        );
    }

    calculateSum = () => {
        let sum = 0;
        this.context.products.forEach( p => {
            sum += p.count ;            
        })
        return sum 
    
    }
}

 
export default Navbar;