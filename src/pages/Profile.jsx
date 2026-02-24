import { Link } from "react-router-dom"

export default function Profile(){
return (
    <>
    
    <div className="container mt-5">
      <h3 className="mb-4">My Profile</h3>

      <div className="row">

        {/* User Info */}
        <div className="col-md-6">
          <div className="card p-4 shadow-sm">
            <h5 className="mb-3">Personal Information</h5>

            <p className="text-start"><strong>Name:</strong> Vartika Bhatt</p>
            <p className="text-start"><strong>Email:</strong> vartikabhatt@email.com</p>
            <p className="text-start"><strong>Phone:</strong> +91 9866543210</p>

          </div>
        </div>

        {/* Quick Actions */}
        <div className="col-md-6">
          <div className="card p-4 shadow-sm">
            <h5 className="mb-3">Account Options</h5>

            <Link to="/Address" className="btn btn-primary w-100 mb-3">
              Manage Addresses
            </Link>

            <Link to="/OrderHistory" className="btn btn-success w-100">
              View Order History
            </Link>
          </div>
        </div>

      </div>
    </div>
    </>
  );

}
