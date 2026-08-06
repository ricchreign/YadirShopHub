import {Routes, Route} from "react-router-dom"
import Home from "./assets/pages/Home"
import Auth from "./assets/pages/Auth"
import Checkout from "./assets/pages/Checkout"
import Navbar from "./assets/component/Navbar"
import './App.css'
import AuthProvider from "./context/AuthContext"
import ProductDetails  from "./assets/pages/ProductDetails"
import CartProvider from "./context/CartContext"


function App() {

  return (
    <AuthProvider>
      <CartProvider>
    <div className="app">
    <Navbar />
      <Routes>
        <Route path="/" element = {<Home/>} /> 
        <Route path="/auth" element = {<Auth/>}/> 
        <Route path="/checkout" element = {<Checkout/>}/> 
        <Route path="/products/:id" element = {<ProductDetails/>}/>  
      </Routes>
    </div>
      </CartProvider>
    </AuthProvider>
    
  );
}

export default App;
