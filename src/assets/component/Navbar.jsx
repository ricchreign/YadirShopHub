import {Link} from "react-router-dom"
import { useCart } from "../../context/CartContext"
import { useAuth } from "../../context/AuthContext"
export default function Navbar (){
    const {user, logout} = useAuth();
    const { cartItems } = useCart()
    const cartCount = cartItems.reduce (
        (total, item) => total + item.quantity,
        (0)
    );
    return(
        <nav className="navbar">
            <div className="navbar-container">
                
                <Link to="/" className="navbar-brand" >
                ShopHub 
                </Link>
                <div className="navbar-links" >
                    <Link to="/">
                Home
                </Link>
                <Link to="/checkout">
                Cart
                {cartCount > 0 && (
                    <span className="cart-badge">
                        {cartCount}
                    </span>
                )}
                </Link>
                </div>
                
            <div className="navbar-auth">
                {! user ? (

                <div className="navbar-auth-links">
                    <Link to="/auth" className="btn btn-secondary">
                    Login 
                    </Link>
                    <Link to="/auth" className="btn btn-secondary">
                    Sign Up 
                    </Link>
                </div>
                ) : (
                    <div className="navbar-user">
                        <span className="navbar-greeting">
                            Hello, {user.email}
                        </span>
                        <button className="btn btn-secondary" onClick={logout}>Logout</button>
                    </div>

                )}
            </div>
            </div>
        </nav>
    );
}