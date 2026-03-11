import { Link } from "react-router-dom"
import useShopContext from "../contexts/ShopContext";
export default function Wishlist(){
     const {products,wishlist,handleCart,alert} = useShopContext();

    const wishlistIds = JSON.parse(localStorage.getItem("wishlist")) || wishlist
      
       const whishlistdata = products.filter(product =>
                    wishlistIds.includes(product.id))
        
    return(
        <>
        {alert && (
                <div className={`alert alert-${alert.type} w-auto`}>
                    {alert.message}
                </div>
                )}
        <div className="container">
            <div className="bg-light mt-4">
               <h5 className="py-3">My Wishlist</h5> 
            <div className="row">
            {whishlistdata.map(item => (
                <div key={item.id} className="col-md-3 m-3">
                  
                <div  className="bg-white rounded-2xl shadow hover:shadow-lg transition p-4">
                   
                    <button
                        className="btn btn-light rounded-circle shadow position-absolute"
                        >
                        <i className="bi bi-heart-fill text-danger"></i>
                    </button>
                   
                  
                 <Link to="/ProductDetail">   
                <img
                  src={item.image}
                  className="card-img-top"
                  alt="Kids"
                  
                />
                </Link>
                
                <p className="font-medium">{item.name}</p>
                <span className="font-semibold">₹{item.price}</span>< br/>
               <div className="d-grid pt-2">
                    <button className="btn btn-primary" type="button" onClick={() => handleCart(item.id)}>Add to cart</button><br/>
                </div>
                </div>
                 </div>
            ))}

            </div>
            
           
            </div>
        </div>
         
        </>
    )
}