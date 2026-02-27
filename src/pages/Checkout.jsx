import { useState } from "react"
import { Link } from "react-router-dom"
export default function Checkout(){
  const [address, setSelectedAddress] = useState();
  const saved = JSON.parse(localStorage.getItem("addresses"))
    return(
        <>
         
           <div className='container'>
            <div className="container mt-5">
      <h3>Checkout</h3>
      <p>Please select address</p>
      <div className="row mt-4">
        <div className="col-md-2"></div>
        <div className="col-md-8">
        {saved.map(addr => (
          <div key={addr.house} className="card p-3 mb-3">
            <input type="radio" onChange={() => setSelectedAddress(addr.house)}/> {addr.house},{addr.street},{addr.area},{addr.city}, {addr.pincode}
          </div>
           ))}
           <div className="d-flex gap-2">
          <Link to="/Address" className="btn btn-dark">
            Add New Address
          </Link>
          {address ? <Link to="/Order" className="btn btn-dark w-100">
              Checkout
            </Link>: ""}
           
            </div>
        </div>
        <div className="col-md-2"></div>
        
      </div>
    </div>
           </div>
        </>
    )
}