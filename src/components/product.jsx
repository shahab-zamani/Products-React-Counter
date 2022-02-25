import React from "react";
import './product.css';
import {Component} from "react";
import  'bootstrap/dist/css/bootstrap.min.css';

class Product extends Component {
     //state = {
       //  count : this.props.count, 
    // }
          render() {
       const {productName} = this.props;
        return (
           // <>
                //{ this.count !== 0 ?  (
                        <div>
                        <span className ='m-2  text-info  '>{productName}</span> 
                        <span className = 'm-2 badge bg-primary '> {this.format() /* this.count === 0 ? 'zero' : this.count} */ }</span> 
                        <button onClick = {this.handleIncrement} className = 'm-2 btn btn-sm btn-success '>+</button>
                        <button onClick = {this.handleDecrement} className = 'm-2 btn btn-sm btn-warning '>-</button>
                        <button onClick =  {this.handleDelete} className = 'm-2 btn btn-sm btn-danger '>Delete</button>
                        <p>{this.props.children}</p>
                        </div>
                       // ) : (
                         //   <>there is no products</>
                       // )

                   // }       
            //</>
        );
    
} 


handleIncrement = () => {
  
  this.props.onIncrement(this.props.id);
  
    // const count = this.state.count;
    //const {count} = this.state;
 //this.setState({count : count + 1})
 //console.log(this.state)
}

handleDecrement = () => {
    this.props.onDecrement(this.props.id);

   //this.setState({count : this.state.count - 1})
}

handleDelete = () => {
this.props.onDelete(this.props.id);
}

format (count){
if (this.props.count===0) {
    return 'zero';
} else {
    return(this.props.count)
}
}
}
export default Product;