import { Link } from "react-router-dom";
import useShopContext from "../contexts/ShopContext";
export default function OrderHistory() {
  const {products} = useShopContext();
    const orders = JSON.parse(localStorage.getItem("orders")) || [];
    const allOrdersWithProducts = orders.map((order) => {

      const cartdata = order.items.map(cartItem => {
        const product = products.find(p => p.id === cartItem.id);

        return {
          ...product,
          quantity: cartItem.quantity
        };
      });

      return {
        ...order,
        items: cartdata
      };
    });
   
  return (
    <>
    
    <div className="container mt-5">
      <h3>Order History</h3>
      <hr />
    {allOrdersWithProducts.map(order => (
     <div key={order.id}>
      <h6>Order ID: {order.id}</h6>
       {order.items.map((item) => (
         <div className="card p-3 mb-3"  key={item.id}>
        <div className="d-flex">
          <img className="card-img-top"src={item.image} style={{ height: '150px', width: '100px' }}/>
          <div className="ms-3">
            <h6>{item.name}</h6>
            <p>{item.description}</p>
            <p>₹{item.price}, Quantity: {item.quantity}</p>
          </div>
        </div>
 </div>
       ))}
       
      </div>
    ))}
      <Link to="/Profile" className="btn btn-dark">
        Back to Profile
      </Link>
    </div>
     </>
  );
}

 