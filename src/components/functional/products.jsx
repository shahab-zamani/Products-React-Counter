import Product from './product';

const Products = ({products,onIncrement,onDecrement,onDelete,onReset}) => {
            
    return ( 

        <>
        
        <button onClick = { onReset} className = 'btn btn-primary' >Reset</button>
        {products.map((p,index) => (
         <Product  
         onIncrement = {onIncrement} 
         onDecrement = {onDecrement}  
         onDelete = {onDelete}
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

 