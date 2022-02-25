
import React from "react";
import  'bootstrap/dist/css/bootstrap.min.css';

const Product =  ({productName, count  , id , onDelete , children, onIncrement , onDecrement}) => {

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
        onIncrement(id);
 }
 
 function handleDecrement ()  {
        onDecrement(id);
 }
 
 function handleDelete  ()  {
     onDelete(id);
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