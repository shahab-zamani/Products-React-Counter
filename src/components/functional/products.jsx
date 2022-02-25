import Product from './product';
import { useState } from 'react';

const Products = () => {
    const [Products, setProducts] = useState(
        [
        {id: 1, count : 2 , productName : 'Laptop'},
        {id: 2, count : 3 , productName : 'Phone'},
        {id: 3, count : 5 , productName : 'Airpod'}
                ]
         )          
    return ( 

        <>
        
        <button onClick = { handleReset} className = 'btn btn-primary' >Reset</button>
        {Products.map((p,index) => (
         <Product  onIncrement = {handleIncrement} onDecrement = {handleDecrement}  onDelete = {handleDelete} id = {p.id} key ={index} count = {p.count} productName = {p.productName} > 
         <p>counter </p>
          </Product>
         ))}

        </>
             );

             function handleIncrement  (productId) {
                const newProducts =[...Products];
                const index = newProducts.findIndex(p=> p.id === productId);
                newProducts[index].count  += 1;
                setProducts(newProducts);
        
        
            }
        
            function handleDecrement (productId) {
                const newProducts =[...Products];
                const index = newProducts.findIndex(p=> p.id === productId);
                newProducts[index].count -= 1;
                setProducts (newProducts);
                
            }
    
             function handleReset ()   {
                const newProducts = Products.map( p =>{ 
                   p.count = 0 ;
                   return p;
                 } ) 
                 setProducts(newProducts);
                }

        
                function handleDelete  (productId) { 
                const newProducts = Products.filter(p => p.id !== productId);
                setProducts ( newProducts);
                 }
}
 
export default Products;

 