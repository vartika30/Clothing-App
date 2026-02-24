import { Link } from "react-router-dom"
export default function ProductDetail(){
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
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAferBVS33idDbXvbK-WKEY7MfgkC2_rH4OQ&s"
                    className="card-img-top"
                    alt="Kids"
                    />
                     <Link to="/cart">
                        <div className="d-grid pt-2">
                           <button className="btn btn-primary" type="button">Add to cart</button><br/>
                        </div>
                        </Link>
                    </div>
                </div>

                <div className="col-md-8 mt-4">
                    <div className="bg-white p-4">

                        <h5 className="text-start">
                            Men Premium Jacket Quilted Hooded Winter Jackets
                        </h5>

                        <div className="mb-2 text-start">
                            <span className="badge bg-success">4.5 ★</span>
                        </div>

                        <div className="mb-3 text-start">
                            <h4 className="fw-bold d-inline">₹2000</h4>
                        </div>

                        <div className="mb-3 text-start">
                            <span className="fw-medium me-2">Quantity:</span>
                            <button className="btn btn-outline-secondary btn-sm">−</button>
                            <span className="mx-2">1</span>
                            <button className="btn btn-outline-secondary btn-sm">+</button>
                        </div>

                        <div className="mb-4 text-start">
                            <span className="fw-medium d-block mb-2">Size:</span>
                            <div className="btn-group">
                            <button className="btn btn-outline-secondary btn-sm">S</button>
                            <button className="btn btn-outline-primary btn-sm">M</button>
                            <button className="btn btn-outline-secondary btn-sm">XL</button>
                            <button className="btn btn-outline-secondary btn-sm">XXL</button>
                            </div>
                        </div>

                        <hr />

                        <div>
                            <h6 className="text-start">Description</h6>
                            <ul className="small text-start">
                            <li>Stylish hooded winter jacket with premium finish</li>
                            <li>Water resistant outer shell</li>
                            <li>Comfortable quilted lining</li>
                            <li>Perfect for casual and outdoor wear</li>
                            </ul>
                        </div>
                    </div>
                    
                </div>
            </div>
            </div>
        </div>
)

}