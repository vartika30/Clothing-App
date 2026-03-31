import { Link } from "react-router-dom"
import useShopContext from "../contexts/ShopContext";
export default function Cart(){
    const {products,cart,handleWishlist,wishlist,handleRemove,handleDecrease,handleIncrease,alert} = useShopContext();
    const cartIds = JSON.parse(localStorage.getItem("cart")) || cart
     console.log(cartIds);
      const cartdata = products.filter(product =>
        cartIds.some(item => item.id === product.id))
    
        //calculating price
          const checkoutItems = cartIds.map(cartItem => {
            const product = products.find(p => p.id === cartItem.id)

            return {
                ...product,
                quantity: cartItem.quantity,
                size: cartItem.size
            }
            })

            

            const subtotal = checkoutItems.reduce((total, item) => {
                return total + item.price * item.quantity
            }, 0)


    return(
        <>
        
         <div className="bg-light my-5">
            {alert && (
                <div className={`alert alert-${alert.type} w-auto`}>
                    {alert.message}
                </div>
                )}
            <h5 className="py-3">My Cart({cartdata.length})</h5> 
            <div className="row">
                <div className="col-md-6 mt-2">
                  {cartdata.map(item => (
                  
                    <div key={item.id} class="row my-3">
                        <div className="col-md-6">
                        <img
                            src={item.image}
                            className="card-img-top"
                            alt="Kids"
                            /> 
                        </div>
                        <div className="col-md-6">
                         <div className="bg-white p-2">
                       <p className="fw-bold text-start"> 
                            {item.name}
                        </p> 
                        <p className="fw-bold text-start">₹{item.price} , {cartIds.find(c => c.id === item.id)?.size || item.size}</p>
                        <div className="mb-3 text-start">
                            <span className="fw-medium me-2">Quantity:</span>
                            <button className="btn btn-outline-secondary btn-sm"  onClick={() => handleDecrease(item.id)}>−</button>
                            <span className="mx-2">{cartIds.find(c => c.id === item.id)?.quantity || item.quantity}</span>
                            <button className="btn btn-outline-secondary btn-sm" onClick={() => handleIncrease(item.id)}>+</button>
                        </div>
                         <div className="d-grid mt-2"> 
                        <button className="btn btn-sm btn-danger" onClick={() => handleRemove(item.id)}>
                            Remove
                        </button><br />
                        <button className="btn btn-sm btn-outline-dark ms-2" onClick={() => handleWishlist(item.id)}>
                            {
                                    wishlist.includes(item.id)
                                    ? "Added to Wishlist"
                                    : "Move to Wishlist"
                                }
                        </button>
                        </div>
                    </div>
                        </div>
                    </div>


                            ))} 
                    
                 
                </div>
     
                <div className="col-md-6 mt-4">
                    <div className="bg-white p-4">
                        <p className="fw-bold text-start">Price Detail</p>
                        <hr />
                        <div className="d-flex justify-content-between mt-3">
                          <span>Price </span>
                          <span>₹{subtotal}</span>
                        </div>
                         <div className="d-flex justify-content-between">
                            <span>Delivery Charges</span>
                            <span>₹100</span>
                        </div>
                         <hr />
                         <div className="d-flex justify-content-between fw-bold">
                            <span>TOTAL AMOUNT</span>

                            <span>₹{subtotal + 100}</span>
                        </div>
                        <hr />
                        <Link to="/Checkout">
                            <div className="d-grid pt-2">
                                <button className="btn btn-primary" type="button" >Place order</button><br/>
                            </div>
                        </Link>
                         
                        
                    </div>
                    
                </div>
               
            </div>
            </div>
        </>
    )
} 