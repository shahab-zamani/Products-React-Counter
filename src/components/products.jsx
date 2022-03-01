import React, { Component } from 'react';
import Product from './product';
import ProductContext from './../Context/products';

class Products extends Component {
    static contextType = ProductContext;
    

    render() { 
        return ( 
        <>
        <button onClick = { this.context.onReset} className = 'btn btn-primary' >Reset</button>
        {this.context.products.map((p,index) => (
         <Product /*onIncrement = {this.context.onIncrement} onDecrement = {this.context.onDecrement}  onDelete= {this.context.onDelete} */ id= {p.id}  key ={index} count = {p.count} productName = {p.productName} > Product counter </Product>
         ))}

        </>
        );
    }

}
 
export default Products;