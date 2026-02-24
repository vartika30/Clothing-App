import { Link } from "react-router-dom";
import Header from '../components/Header'

export default function Order() {
  return (
    <>
    <Header />
    <div className="container text-center mt-5">
      <h2>🎉 Order Placed Successfully!</h2>
      <Link to="/" className="btn btn-dark mt-4">
        Go to Home
      </Link>
    </div>
     </>
  );
}

 