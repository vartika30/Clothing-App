import { Link } from "react-router-dom"
import { useEffect , useState} from "react";
import useShopContext from "../contexts/ShopContext";
export default function Wishlist(){
     const {products,wishlist,handleCart,alert} = useShopContext();
 const [Size, setSelectedSize] = useState("")
    const wishlistIds = JSON.parse(localStorage.getItem("wishlist")) || wishlist
      
       const whishlistdata = products.filter(product =>
                    wishlistIds.includes(product.id))

                    
        
    return(
        <>
            <div className="bg-light my-5">
                 {alert && (
               <div className="position-fixed top-0 end-0 mt-5 p-3" style={{ zIndex: 9999 }}>    
                <div className={`alert alert-${alert.type} w-auto`}>
                    {alert.message}
                </div>
                </div>
                )}
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
                  <div className="mb-1">
                            <div className="btn-group">
                            <button className={Size == "S" ? "btn btn-outline-primary btn-sm": "btn btn-outline-secondary btn-sm"} onClick={() => setSelectedSize("S")}>S</button>
                            <button className={Size == "M" ? "btn btn-outline-primary btn-sm": "btn btn-outline-secondary btn-sm"} onClick={() => setSelectedSize("M")}>M</button>
                            <button className={Size == "L" ? "btn btn-outline-primary btn-sm": "btn btn-outline-secondary btn-sm"} onClick={() => setSelectedSize("L")}>L</button>
                            <button className={Size == "XL" ? "btn btn-outline-primary btn-sm": "btn btn-outline-secondary btn-sm"} onClick={() => setSelectedSize("XL")}>XL</button>
                            </div>
                        </div>
               <div className="d-grid pt-2">
                    <button className="btn btn-primary" type="button" onClick={() => handleCart(item.id,Size)}>Add to cart</button><br/>
                </div>
                </div>
                 </div>
            ))}

            </div>
            
           
            </div>
       
        </>
    )
}