import {Routes, Route} from "react-router-dom"
import Home from "./assets/pages/Home"
import Auth from "./assets/pages/Auth"
import Checkout from "./assets/pages/Checkout"
import Navbar from "./assets/component/Navbar"
import './App.css'
import AuthProvider from "./context/AuthContext"

function App() {

  return (
    <AuthProvider>
    <div className="app">
    <Navbar />
      <Routes>
        <Route path="/" element = {<Home/>} /> 
        <Route path="/auth" element = {<Auth/>}/> 
        <Route path="/checkout" element = {<Checkout/>}/> 
      </Routes>
    </div>
    </AuthProvider>
  );
}

export default App;
