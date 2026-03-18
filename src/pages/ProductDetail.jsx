import { Link } from "react-router-dom"
import { useParams } from "react-router-dom";
import { useState} from "react";
import useShopContext from "../contexts/ShopContext";
export default function ProductDetail(){
     const { id } = useParams();
  const {products,handleCart,handleDecrease,handleIncrease,cart} = useShopContext();
  
  const [Size, setSelectedSize] = useState("")
const product = products.find(item => item.id === Number(id));

return(
    <div>
       
         <div className="container bg-light">
            <div className="row">
                <div className="col-md-4 mt-4">
                  <div className="bg-white rounded-2xl shadow hover:shadow-lg transition p-4">
                     <Link to="/wishlist">
                      <button
                        className="btn btn-light rounded-circle shadow position-absolute"
                        >
                        <i className="bi bi-heart"></i>
                    </button>
                     </Link>   
                    <img
                    src={product.image}
                    className="card-img-top"
                    alt="Kids"
                    />
                     <Link to="/cart">
                        <div className="d-grid pt-2">
                           <button className="btn btn-primary" type="button" onClick={() => handleCart(product.id,Size)}>Add to cart</button><br/>
                        </div>
                        </Link>
                    </div>
                </div>

                <div className="col-md-8 mt-4">
                    <div className="bg-white p-4">

                        <h5 className="text-start">
                            {product.name} <span className="badge bg-success">{product.rating} ★</span>
                        </h5>

                        <div className="mb-2 text-start">
                            
                        </div>

                        <div className="mb-3 text-start">
                            <h4 className="fw-bold d-inline">₹{product.price}</h4>
                        </div>

                        <div className="mb-4 text-start">
                            <span className="fw-medium d-block mb-2">Size:</span>
                            <div className="btn-group">
                            <button className={Size == "S" ? "btn btn-outline-primary btn-sm": "btn btn-outline-secondary btn-sm"} onClick={() => setSelectedSize("S")}>S</button>
                            <button className={Size == "M" ? "btn btn-outline-primary btn-sm": "btn btn-outline-secondary btn-sm"} onClick={() => setSelectedSize("M")}>M</button>
                            <button className={Size == "L" ? "btn btn-outline-primary btn-sm": "btn btn-outline-secondary btn-sm"} onClick={() => setSelectedSize("L")}>L</button>
                            <button className={Size == "XL" ? "btn btn-outline-primary btn-sm": "btn btn-outline-secondary btn-sm"} onClick={() => setSelectedSize("XL")}>XL</button>
                            
                            </div>
                        </div>

                        <hr />

                        <div>
                            <h6 className="text-start">Description</h6>
                            <p className="text-start">{product.description}</p>
                            
                        </div>
                    </div>
                    
                </div>
            </div>
            </div>
        </div>
)

}