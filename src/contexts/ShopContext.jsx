import { createContext, useContext , useState } from "react";

export const ShopContext = createContext();
const useShopContext = () => useContext(ShopContext);
export default useShopContext;

export function ShopProvider({children}){

    
  const productdata = [
      {
        id: 1,
        name: "Black Hoodie",
        category: "men",
        price: 1499,
        rating: 4.5,
        image: "https://civies.in/cdn/shop/files/blackfront_390x.jpg",
        description: "Premium cotton hoodie"
      },
      {
        id: 2,
        name: "Blue Denim Jacket",
        category: "men",
        price: 3499,
        rating: 3,
        image: "https://zazu.co.in/cdn/shop/files/69_c5e400c7-8353-48ad-8216-6746cad4241d.jpg",
        description: "Stylish denim jacket"
      },
       {
        id: 3,
        name: "Blue Denim Skirt",
        category: "women",
        price: 2499,
        rating: 4,
        image: "https://assets.myntassets.com/dpr_1.5,q_30,w_400,c_limit,fl_progressive/assets/images/32801644/2025/3/7/38727191-7024-4040-8c04-a44f7f6f11f01741329823281-Chemistry-Women-Skirts-9591741329822623-1.jpg",
        description: "Stylish denim jacket"
      },
      {
        id: 4,
        name: "White Hoodie",
        category: "women",
        price: 1499,
        rating: 2.5,
        image: "https://assets.ajio.com/medias/sys_master/root/20241008/UQdC/67051a94f9b8ef490ba35a19/-473Wx593H-443057667-offwhite-MODEL.jpg",
        description: "Premium cotton hoodie"
      },
      {
        id: 5,
        name: "Black Hoodie",
        category: "kids",
        price: 1599,
        rating: 4.5,
        image: "https://assets.ajio.com/medias/sys_master/root/20240930/oNx6/66fabe53f9b8ef490b851f78/-473Wx593H-700517023-black-MODEL.jpg",
        description: "Premium cotton hoodie"
      },
      {
        id: 6,
        name: "Pink Frock",
        category: "kids",
        price: 1299,
        rating: 4.5,
        image: "https://stanwellskids.in/cdn/shop/files/babypinkrany2-_1_1024x1024.jpg",
        description: "Premium cotton hoodie"
      },
    ];

    const [search, setSearch] = useState("")
    const [products] = useState(productdata)
    const [updateProductcategory, selectCategory] = useState(productdata)
    const [selectedCategories, setSelectedCategories] = useState([])
    const [selectedRatings, setSelectedRatings] = useState([])
    const [sortOption, setSortOption] = useState("")
    const [priceRange, setPriceRange] = useState(5000)
    const [wishlist, setWishlist] = useState(() => {
        const saved = localStorage.getItem("wishlist")
        return saved ? JSON.parse(saved) : []
      })
    const [cart, setCart] = useState([])
    const [orders, setOrders] = useState([])

    function setCategory(categoryname){
      console.log(categoryname)
      let updated = [...selectedCategories]

        if (updated.includes(categoryname)) {
          updated = updated.filter(item => item !== categoryname)
        } else {
          updated.push(categoryname)
        }

        setSelectedCategories(updated)
        applyFilters(updated, selectedRatings,sortOption,priceRange)

    }

    function setRating(ratingValue) {
      let updated = [...selectedRatings]
      if (updated.includes(ratingValue)) {
        updated = updated.filter(item => item !== ratingValue)
      } else {
        updated.push(ratingValue)
      }
      setSelectedRatings(updated)
      applyFilters(selectedCategories, updated,sortOption,priceRange)
    }

    function handleSort(option) {
      setSortOption(option)
      applyFilters(selectedCategories, selectedRatings,option,priceRange)
    }

   function handlePriceChange(value) {
      setPriceRange(value)
      applyFilters(selectedCategories, selectedRatings, sortOption, value)
    }

     function handleWishlist(productId){
      let updated = [...wishlist]
        if (updated.includes(productId)) {
         updated = wishlist.filter(id => id !== productId)
          alert("Item removed from wishlist!")
        } else {
          updated.push(productId)
           alert("Item added to wishlist!")
        }
        setWishlist(updated)
         localStorage.setItem("wishlist", JSON.stringify(updated))
        
      }

      function handleSearch(searchValue) {
        setSearch(searchValue)
        applyFilters(selectedCategories, selectedRatings,sortOption,priceRange,wishlist,searchValue)
    }

    function applyFilters(categories, ratings,sortOption,priceRange,wishlist,search) {
        let filtered = products

        if (categories.length > 0) {
          filtered = filtered.filter(product =>
            categories.includes(product.category)
          )
        }

        if (ratings.length > 0) {
          filtered = filtered.filter(product =>
            ratings.some(r => product.rating >= r)
          )
        }
           if (priceRange !== undefined) {
          filtered = filtered.filter(product =>
            product.price <= priceRange
          )
        }

        if (sortOption === "low-high") {
            filtered.sort((a, b) => a.price - b.price)
          } else if (sortOption === "high-low") {
            filtered.sort((a, b) => b.price - a.price)
          }

        if(search){
          console.log(search)
          filtered = filtered.filter(product =>
          product.name.toLowerCase().includes(search.toLowerCase())
)
  
        }  

         
        selectCategory(filtered)
      }

     function handleCart(productId){
         const existingItem = cart.find(item => item.id === productId)
        let updatedCart
        if (existingItem) {
          updatedCart = cart.map(item =>
            item.id === productId
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        } else {
          updatedCart = [...cart, { id: productId, quantity: 1 }]
        }
        setCart(updatedCart)

        localStorage.setItem("cart", JSON.stringify(updatedCart))
        alert("Item added to cart!")
     }

     function handleRemove(id){
      const updatedCart = cart.filter(item => item.id !== id)
      setCart(updatedCart)
      localStorage.setItem("cart", JSON.stringify(updatedCart))
       alert("Item removed from cart!")
    }

    function handleIncrease(id){
      const updatedCart = cart.map(item =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )

      setCart(updatedCart)
      localStorage.setItem("cart", JSON.stringify(updatedCart))
      alert("Quantity added to Item!")
    }

    function handleDecrease(id){
        const updatedCart = cart
          .map(item =>
            item.id === id
              ? { ...item, quantity: item.quantity - 1 }
              : item
          )
          .filter(item => item.quantity > 0)

        setCart(updatedCart)
        localStorage.setItem("cart", JSON.stringify(updatedCart))
        alert("Quantity removed from item!")
      }

     

   return(
    <ShopContext.Provider value={{products,updateProductcategory,setCategory,setRating,handleSort,
    handlePriceChange,priceRange,handleWishlist,wishlist,handleCart,cart,handleRemove,handleDecrease,handleIncrease,handleSearch,search}}>
    {children}
    </ShopContext.Provider>
   )
}