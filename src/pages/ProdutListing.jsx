import { Link } from "react-router-dom"
import { useParams } from "react-router-dom";
import useShopContext from "../contexts/ShopContext";
import { useEffect } from "react";

export default function ProductListing(){
    const {updateProductcategory,setCategory,setRating,handleSort,handlePriceChange,priceRange,
        handleWishlist,wishlist,handleCart,alert} = useShopContext();

        const {category} = useParams();
      
        useEffect(()=>{
            if (category) {
            setCategory(category)
            }else{
                setCategory("")
            }
        },[category])
       
        

    return(
        <div>
       
        <div className="row my-4">
            <div className="col-md-3 bg-white rounded-2xl shadow p-3 sticky top-6 h-fit">
             <div className="flex items-center justify-between mb-4">
                <h6 className="text-start">Filters</h6>
            <h6 className="text-end">Clear</h6>
            </div>
          
            <div className="mb-4">
 
            <div className="d-flex justify-content-between align-items-center mb-2">
                <h6 className="text-start">Price</h6>
            </div>

            
            <div className="d-flex justify-content-between small fw-semibold mb-2">
                <span>₹0</span>
                <span>₹{priceRange}</span>
            </div>

            
            <input
                type="range"
                className="form-range"
                min="0"
                max="5000"
                value={priceRange}
                onChange={(e) => handlePriceChange(Number(e.target.value))}
            />
            </div>

            <div className="my-4">
              <h5 className="text-start mb-3">Category</h5>  
              <div className="text-start">  
                    <label  className="flex items-center gap-2 text-sm mb-1">
                    <input type="checkbox" value="men" onChange={()=>setCategory("men")}/> Men
                    </label>
            </div>
            <div className="text-start"> 
             <label className="flex items-center gap-2 text-sm mb-1">
                <input type="checkbox" value="women" onChange={()=>setCategory("women")}/> Women
            </label>
            </div>
            <div className="text-start"> 
             <label className="flex items-center gap-2 text-sm mb-1">
                <input type="checkbox" value="kids" onChange={()=>setCategory("kids")}/> Kids
            </label>
            </div>
            </div>


            <div className="my-4">
               <h5 className="text-start my-4">Rating</h5>   
         
               <div className="text-start">     
                <label className="flex items-center gap-2 text-sm mb-1">
                <input type="checkbox" onChange={()=>setRating("4")}/> 4 ⭐ & up
                </label>  
            </div>
             <div className="text-start">     
                <label className="flex items-center gap-2 text-sm mb-1">
                <input type="checkbox" onChange={()=>setRating("3")}/> 3 ⭐ & up
                </label>  
            </div>
             <div className="text-start">     
                <label className="flex items-center gap-2 text-sm mb-1">
                <input type="checkbox" onChange={()=>setRating("2")}/> 2 ⭐ & up
                </label>  
            </div>  
           
           
            </div>

            <div className="my-4">
            <h5 className="text-start my-4">Sort by</h5>  
            <div className="d-flex align-items-center">
             <select className="border rounded-lg px-3 py-2" onChange={(e) => handleSort(e.target.value)}>
            <option>Select</option>
            <option value="low-high">Price: Low to High</option>
            <option value="high-low">Price: High to Low</option>
            </select>       
          </div>    
            
            
            </div>
            

            </div>

            <div className="col-md-9 bg-light mt-8">

                 {alert && (
                <div className={`alert alert-${alert.type} w-auto`}>
                    {alert.message}
                </div>
                )}
               <h5 className="text-start py-3">Showing all products</h5> 
              
            <div className="row">
               {updateProductcategory.map(item => (
                <div key={item.id} className="col-md-4 my-3">
                  
                <div  className="bg-white rounded-2xl shadow hover:shadow-lg transition p-4">
                   
                    <button
                        className="btn btn-light rounded-circle shadow position-absolute" onClick={() => handleWishlist(item.id)}
                        > 
                        <i className={
                                    wishlist.includes(item.id)
                                    ? "bi bi-heart-fill text-danger"
                                    : "bi bi-heart"
                                }></i>
                    </button>
                   
                 <Link to="/ProductDetail">   
                <img
                  src={item.image}
                  className="card-img-top"
                  alt="Kids"
                  style={{ height: '150px', objectFit: 'cover' }}
                />
                </Link>
                
                <p className="font-medium">{item.name}</p>
                <span className="font-semibold">₹{item.price}</span>< br/>
                
                <div className="d-grid pt-2">
                    <button className="btn btn-primary" type="button" onClick={() => handleCart(item.id)} >Add to cart</button><br/>
                </div>
               
               
                </div>
                 </div>
            ))}

            </div>
            
           
            </div>
            </div>
                </div>
    )
}