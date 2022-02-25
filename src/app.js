import {Component} from 'react';
import Products from './components/products';
import Navbar from './components/navbar';

 class App extends Component{


    state = {
        products : [
        {id: 1, count : 2 , productName : 'Laptop'},
        {id: 2, count : 3 , productName : 'Phone'},
        {id: 3, count : 5 , productName : 'Airpod'}
                ]
            } 


    render () {
       return (
            <>
             <Navbar products = {this.state.products}/>
             <Products  
             products = {this.state.products}
             onDelete = {this.handleDelete} 
             onIncrement = {this.handleIncrement} 
             onDecrement = {this.handleDecrement} 
             onReset = {this.handleReset} 
             />
             </>


    );
   }
   handleIncrement = (productId) => {
    const newProducts =[...this.state.products];
    const index = newProducts.findIndex(p=> p.id === productId);
    newProducts[index].count  += 1;
    this.setState({Products : newProducts});


}

handleDecrement = (productId) => {
  const newProducts =[...this.state.products];
  const index = newProducts.findIndex(p=> p.id === productId);
  newProducts[index].count  -= 1;
  this.setState({products : newProducts});


}





handleDelete = (productId) =>{ 
const newProducts = this.state.products.filter(p => p.id !== productId);
this.setState ({products : newProducts});
}

handleReset = ()  => {
const newProducts = this.state.products.map( p =>{ 
   p.count = 0 ;
   return p;
 } ) 
this.setState({products : newProducts});
}
}
 

 export default App;

//function App (){
    //return (
               //     <>
               //     <Navbar></Navbar>
                //    <Products></Products>
                //    </>
              //  );   
//}
// export default App;



