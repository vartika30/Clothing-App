import { useState } from "react"
import { Link } from "react-router-dom"
import useShopContext from "../contexts/ShopContext";
export default function Checkout() {
  const [address, setSelectedAddress] = useState();
  const { handlePlaceOrder } = useShopContext();

  const saved = JSON.parse(localStorage.getItem("addresses")) || [];

  return (
    <div className="container py-5">
      
      {/* Page Title */}
      <div className="text-center mb-5">
        <h2 className="fw-bold">Checkout</h2>
        <p className="text-muted fs-5">
          {address ? "Select your delivery address" : "Please add an address to continue"}
        </p>
      </div>

      {/* Card Layout */}
      <div className="row justify-content-center">
        <div className="col-md-8">

          <div className="card shadow-sm p-4">
            
            {/* Address List */}
            {saved.length > 0 ? (
              saved.map((addr) => (
                <div
                  key={addr.house}
                  className="border rounded p-3 mb-3 d-flex align-items-start"
                  style={{ cursor: "pointer" }}
                  onClick={() => setSelectedAddress(addr.house)}
                >
                  <input
                    type="radio"
                    className="form-check-input me-3 mt-1"
                    checked={address === addr.house}
                    onChange={() => setSelectedAddress(addr.house)}
                  />

                  <div className="fs-6">
                    <strong>{addr.house}</strong>, {addr.street}, {addr.area},<br />
                    {addr.city} - {addr.pincode}
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center text-muted fs-5">
                No saved addresses found
              </p>
            )}

            {/* Buttons */}
            <div className="d-flex flex-column gap-3 mt-4">

              <Link to="/Address" className="btn btn-warning btn-lg">
                + Add New Address
              </Link>
              <Link to="/Order">
                  {address && (
                    <button
                      className="btn btn-primary btn-lg"
                      onClick={handlePlaceOrder}
                    >
                      Proceed to Checkout
                    </button>
                  )}
              </Link>
              
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}