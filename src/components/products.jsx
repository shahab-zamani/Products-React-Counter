import React, { Component } from 'react';
import Product from './product';

class Products extends Component {
    state = {
        Products : [
        {id: 1, count : 2 , productName : 'Laptop'},
        {id: 2, count : 3 , productName : 'Phone'},
        {id: 3, count : 5 , productName : 'Airpod'}
                ]
            } 

    render() { 
        return ( 
        <>
        <button onClick = { this.handleReset} className = 'btn btn-primary' >Reset</button>
        {this.state.Products.map((p,index) => (
         <Product onIncrement = {this.handleIncrement} onDecrement = {this.handleDecrement}  onDelete= {this.handleDelete} id= {p.id}  key ={index} count = {p.count} productName = {p.productName} > Product counter </Product>
         ))}

        </>
        );
    }

    handleIncrement = (productId) => {
        const newProducts =[...this.state.Products];
        const index = newProducts.findIndex(p=> p.id === productId);
        newProducts[index].count  += 1;
        this.setState({Products : newProducts});


    }

    handleDecrement = (productId) => {
        const newProducts =[...this.state.Products];
        const index = newProducts.findIndex(p=> p.id === productId);
        newProducts[index].count -= 1;
        this.setState({Products : newProducts});
        
    }





    handleDelete = (productId) =>{ 
    const newProducts = this.state.Products.filter(p => p.id !== productId);
    this.setState ({Products : newProducts});
    }

    handleReset = ()  => {
    const newProducts = this.state.Products.map( p =>{ 
       p.count = 0 ;
       return p;
     } ) 
    this.setState({Products : newProducts});
    }
}
 
export default Products;