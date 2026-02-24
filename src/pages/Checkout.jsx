
import { Link } from "react-router-dom"
export default function Checkout(){
    return(
        <>
         
           <div className='container'>
            <div className="container mt-5">
      <h3>Checkout</h3>
      <div className="row mt-4">
        <div className="col-md-8">
          <div className="card p-3 mb-3">
            <input type="radio" /> Home Address - Delhi
          </div>
          <Link to="/Address" className="btn btn-dark">
            Add New Address
          </Link>
        </div>

        <div className="col-md-4">
          <div className="card p-3">
            <h5>Order Summary</h5>
            <hr />
            <p>Black Hoodie x1</p>
            <p>Total: ₹1499</p>
            <Link to="/order" className="btn btn-dark w-100">
              Confirm Order
            </Link>
          </div>
        </div>
      </div>
    </div>
           </div>
        </>
    )
}