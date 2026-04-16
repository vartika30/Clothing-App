import { Link } from "react-router-dom";
import useShopContext from "../contexts/ShopContext";
export default function Order() {
  const {products} = useShopContext();
    
  const currentOrder = JSON.parse(localStorage.getItem("currentOrder")) || [];
    console.log(currentOrder)
const cartdata = currentOrder.items.map(cartItem => {
            const product = products.find(p => p.id === cartItem.id)

            return {
                ...product,
                quantity: cartItem.quantity,
                date:  currentOrder.date
            }
            })
            
    console.log(cartdata)
  return (
    <>
    <div className="container text-center mt-5">
      <h2>Order Placed Successfully!</h2>
      <hr/>
      <div className="row">
         <div className="col-md-4"></div>
         <div className="col-md-4">
           <div className="card p-3">
            <h5 className="text-start">Order Summary</h5>
            <hr />
            
          {cartdata.map(item => (
          <div key={item.id}>
            <p className="text-start">Order on : {item.date}</p> 
            <p className="text-start"> Product:  {item.name} x {item.quantity}</p>
            <p className="text-start">Price : {item.price}</p> 
            </div>
          ))}
           
          </div>
         </div>
          <div className="col-md-4"></div>
        </div>
      <Link to="/" className="btn btn-dark mt-4">
        Go to Home
      </Link>
    </div>
     </>
  );
}

 