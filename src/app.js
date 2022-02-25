import {Component} from 'react';
import Products from './components/products';
import Navbar from './components/navbar';

// class App extends Component{
//     render () {
//         return (
//             <>
//             <h1>Products Name1</h1>
//             <h1>Products Name2</h1>
//             <h1>Products Name3</h1>
//             </>
//         );
//     }
// }


function App (){
    return (
                    <>
                    <Navbar></Navbar>
                    <Products></Products>
                    </>
                );   
}


export default App;

