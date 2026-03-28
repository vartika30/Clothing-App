import { Link } from "react-router-dom"
import useShopContext from "../contexts/ShopContext";

export default function Header(){

 const {cart,search,handleSearch,wishlist} = useShopContext();
 const cartIds = JSON.parse(localStorage.getItem("cart")) || cart

 return (

<header className="py-3 border-bottom bg-dark fixed-top">
<div className="container">

<div className="row align-items-center g-3">


<div className="col-12 col-md-3 col-lg-2">
<Link to="/" className="text-light text-decoration-none">
<h5 className="mb-0">MyClothingSite</h5>
</Link>
</div>


<div className="col-12 col-md-5 col-lg-6">
<input
className="form-control"
type="search"
placeholder="Search"
value={search}
onChange={(e)=>handleSearch(e.target.value)}
/>
</div>


<div className="col-12 col-md-4 d-flex align-items-center justify-content-md-end justify-content-between gap-3">

<Link to="/Profile">
<button className="btn btn-secondary btn-sm">
User Profile
</button>
</Link>

<Link to="/wishlist" className="text-light position-relative">
<i className="bi bi-heart fs-4"></i>
<span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
{wishlist.length}
</span>
</Link>

<Link to="/cart" className="text-light position-relative">
<i className="bi bi-cart fs-4"></i>
<span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
{cartIds.length}
</span>
</Link>

</div>

</div>

</div>
</header>

 )
}