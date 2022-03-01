import React from 'react';
import Navbar from './navbar';
import Products from './products';
import {useState} from 'react';
import ProductContext from './../../Context/products';


const App = () => {

    const [products, setProducts] = useState(
        [
        {id: 1, count : 2 , productName : 'Laptop'},
        {id: 2, count : 3 , productName : 'Phone'},
        {id: 3, count : 5 , productName : 'Airpod'}
                ]
         )  

    return ( 
            <>
             <ProductContext.Provider 
             value = {{
                products : products ,
                onDelete : handleDelete ,
                onIncrement : handleIncrement ,
                onDecrement : handleDecrement ,
                onReset : handleReset ,
                     }}
                     >
             <Navbar />
             <Products />
             </ProductContext.Provider>
             </>
    );

    function handleIncrement  (productId) {
                const newProducts =[...products];
                const index = newProducts.findIndex(p=> p.id === productId);
                newProducts[index].count  += 1;
                setProducts(newProducts);
        
        
            }
        
            function handleDecrement (productId) {
                const newProducts =[...products];
                const index = newProducts.findIndex(p=> p.id === productId);
                newProducts[index].count -= 1;
                setProducts (newProducts);
                
            }
    
             function handleReset ()   {
                const newProducts = products.map( p =>{ 
                   p.count = 0 ;
                   return p;
                 } ) 
                 setProducts(newProducts);
                }

        
                function handleDelete  (productId) { 
                const newProducts = products.filter(p => p.id !== productId);
                setProducts ( newProducts);
                 }
}
 
export default App;