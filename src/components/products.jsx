import React, { Component } from 'react';
import Product from './product';

class Products extends Component {
    

    render() { 
        return ( 
        <>
        <button onClick = { this.props.onReset} className = 'btn btn-primary' >Reset</button>
        {this.props.products.map((p,index) => (
         <Product onIncrement = {this.props.onIncrement} onDecrement = {this.props.onDecrement}  onDelete= {this.props.onDelete} id= {p.id}  key ={index} count = {p.count} productName = {p.productName} > Product counter </Product>
         ))}

        </>
        );
    }

}
 
export default Products;