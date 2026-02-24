import { Link } from "react-router-dom";
import Header from '../components/Header'

export default function OrderHistory() {
  return (
    <>
    <Header />
    <div className="container mt-5">
      <h3>Order Details</h3>
      <hr />

      <div className="card p-4 mb-4">
        <h6>Order ID: #ORD12345</h6>
        <p>Date: 12 Feb 2026</p>
        <p>Status: Delivered</p>
        <p>Total: ₹2998</p>
      </div>

      <h5>Items</h5>

      <div className="card p-3 mb-3">
        <div className="d-flex">
          <img src="https://via.placeholder.com/100" />
          <div className="ms-3">
            <h6>Black Hoodie</h6>
            <p>₹1499</p>
            <p>Quantity: 2</p>
          </div>
        </div>
      </div>

      <Link to="/Profile" className="btn btn-dark">
        Back to Profile
      </Link>
    </div>
     </>
  );
}

 