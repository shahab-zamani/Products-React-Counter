
import React from "react";
import  'bootstrap/dist/css/bootstrap.min.css';
import {useContext} from "react";
import ProductContext from './../../Context/products';

const Product =  ({productName, count  , id  , children /*, onIncrement , onDecrement , onDelete*/}) => {
    const productContext = useContext(ProductContext);
    //const [count,setCount] = useState(propCount) ;

    return ( 
                         <div>
                        <span className ='m-2  text-info  '>{productName}</span> 
                        <span className = 'm-2 badge bg-primary '> { format() }</span> 
                        <button onClick = {handleIncrement } className = 'm-2 btn btn-sm btn-success '>+</button>
                        <button onClick = {handleDecrement} className = 'm-2 btn btn-sm btn-warning '>-</button>
                        <button onClick = {() => {handleDelete(55)}} className = 'm-2 btn btn-sm btn-danger '>Delete</button>
                        {children}
                        </div>
     );



     function handleIncrement ()  {
        productContext.onIncrement(id);
 }
 
 function handleDecrement ()  {
    productContext.onDecrement(id);
 }
 
 function handleDelete  ()  {
    productContext.onDelete(id);
 }
 
 function format () {
 if (count===0) {
     return 'zero';
 } else {
     return(count)
 }
 }
}
// if function out of component shoul pass count and set count

export default Product;