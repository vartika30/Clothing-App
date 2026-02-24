import { Link } from "react-router-dom"
import useShopContext from "../contexts/ShopContext";

export default function Header(){
   const {products,cart} = useShopContext();
   const cartIds = JSON.parse(localStorage.getItem("cart")) || cart
      
    return (
       <header className="header">
           <div className="row">
           <div className="col-md-4">
             <Link to="/" className="text-dark position-relative">
             <h5 className="text-start">MyClothingSite</h5>
             </Link>
           </div>
           <div className="col-md-4">
             <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
             
           </div>
           <div className="col-md-4 d-flex justify-content-end gap-3">
            <Link to="/Profile" className="text-dark position-relative">
            <button type="button" className="btn btn-secondary">User Profile</button>
            </Link>
             
             <Link to="/wishlist" className="text-dark position-relative">
                <i className="bi bi-heart fs-4"></i>
            </Link>
             <Link to="/cart" className="text-dark position-relative ">
                <i className="bi bi-cart fs-4"></i>
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {cartIds.length}
                </span>
            </Link>
           </div>
            
        </div>
        
            </header>
        
           
        
    )
}