import React from 'react';
import  'bootstrap/dist/css/bootstrap.min.css';
import {useContext} from 'react';
import ProductContext from './../../Context/products';


const Navbar = (props) => {
    const productContext = useContext(ProductContext);

    return ( 
        <nav className='navbar navbar-bg navbar-light '>            

        <div className="container-fluid"></div>
        <a href='#' className='navbar-brand'> Navbar {calculateSum()} </a>
        </nav>
    );

    
    function calculateSum(){ 
        let sum = 0;
       productContext.products.forEach( p => {
            sum += p.count ;            
        })
        return sum 
    
    }

}
    
export default Navbar;