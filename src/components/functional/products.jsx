import Product from './product';
import {useContext} from 'react';
import ProductContext from './../../Context/products';

const Products = (props /*{products,onIncrement,onDecrement,onDelete,onReset}*/ ) => {
       const productContext = useContext(ProductContext);      
    return ( 

        <>
        
        <button onClick = { productContext.onReset} className = 'btn btn-primary' >Reset</button>
        { productContext.products.map((p,index) => (
         <Product  
          id = {p.id} 
          key ={index} 
          count = {p.count} 
          productName = {p.productName} > 
         <p>counter </p>
          </Product>
         ))}

        </>
             );

             
}
 
export default Products;

 