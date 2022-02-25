//import App from './app';
import App from './components/functional/app.jsx';
import reactDOM from 'react-dom'; 
import {render} from "@testing-library/react";
//import Products from './components/functional/products'
//import Products from './components/products'

//import Product from './components/product'
//import Product from './components/functional/product'

// const element = <h1>Products Program</h1>
reactDOM.render(<App/>,document.getElementById('root'));

