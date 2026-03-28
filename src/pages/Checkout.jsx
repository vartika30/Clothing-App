import { useState } from "react"
import { Link } from "react-router-dom"
import useShopContext from "../contexts/ShopContext";
export default function Checkout(){
  const [address, setSelectedAddress] = useState();
   const {products,handlePlaceOrder} = useShopContext();
  const saved = JSON.parse(localStorage.getItem("addresses")) || []
  console.log(saved)
    return(
        <>
         
           <div className='container'>
            <div className="container mt-5">
      <h3>Checkout</h3>
      <p>{address ?  "Please select address" : "Please add address"}</p>
      <div className="row mt-4">
        <div className="col-md-2"></div>
        <div className="col-md-8">
        {saved.map(addr => (
          <div key={addr.house} className="border p-3 d-flex align-items-center">
            <input type="radio" onChange={() => setSelectedAddress(addr.house)}/> {addr.house},{addr.street},{addr.area},{addr.city}, {addr.pincode}
          </div>
           ))}
           <div className="gap-2 mt-2">
          <Link to="/Address" className="btn btn-warning">
            Add New Address
          </Link>
           <Link to="/Order">
          {address ?  <div className="d-grid pt-2">
                                <button className="btn btn-primary" onClick={handlePlaceOrder}  type="button" >Checkout</button><br/>
                            </div>
           : ""}
          </Link>
            </div>
        </div>
        <div className="col-md-2"></div>
        
      </div>
    </div>
           </div>
        </>
    )
}