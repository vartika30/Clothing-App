import { useState } from "react"

export default function Addresses() {
      const [addresses, setAddresses] = useState([])
      const [editingId, setEditingId] = useState(null)
      const saved = JSON.parse(localStorage.getItem("addresses")) || addresses
    
      const [formData, setFormData] = useState({
      house: "",
      street: "",
      area: "",
      city: "",
      pincode: ""
      })

      const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value
        })
      }

      const handleSave = () => {
        let updatedAddresses
        if (editingId) {
          console.log(editingId)
           updatedAddresses = addresses.map(addr =>
            addr.id === editingId
              ? { id:editingId, ...formData }
              : addr
          )
          setAddresses(updatedAddresses)
       localStorage.setItem("addresses", JSON.stringify(updatedAddresses))

        }else{
          const newAddress = {
          id: Date.now(),
          house: formData.house,
          street: formData.street,
          area: formData.area,
          city: formData.city,
          pincode: formData.pincode
        }
         updatedAddresses = [newAddress, ...addresses]
          setAddresses(updatedAddresses)
       localStorage.setItem("addresses", JSON.stringify(updatedAddresses))

        }
      
      setFormData({
        house: "",
        street: "",
        area: "",
        city: "",
        pincode: ""
      })
      setEditingId(null)
    }

    function handleDelete(id){
    const updated = addresses.filter(addr => addr.id !== id)
    setAddresses(updated)
    localStorage.setItem("addresses", JSON.stringify(updated))
  }

  function handleEdit(id) {
     const address = saved.find(addr => addr.id === id)
     
  setFormData({
    house: address.house,
    street: address.street,
    area: address.area,
    city: address.city,
    pincode: address.pincode
  })
 
  setEditingId(address.id)
}

  return (
    <>

   
    <div className="container mt-5">
      <h3 className="mb-4">My Addresses</h3>

      <div className="row">

       
        {saved.map(addr => (
          <div className="col-md-6 mb-4" key={addr.id}>
            <div className="card p-3 shadow-sm">
              <h6>{addr.house},{addr.street}</h6>
              <p className="mb-1">{addr.area}</p>
              <p className="mb-1">
                {addr.city}, {addr.pincode}
              </p>
              
              <div className="d-flex gap-2">
                <button
                  className="btn btn-sm btn-outline-dark"
                  onClick={() => handleEdit(addr.id)}>
                  Edit
                </button>
                <button className="btn btn-sm btn-outline-danger"
                  onClick={() => handleDelete(addr.id)}>
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}

      </div>

      
      <div className="card p-4 shadow-sm mt-4">
        <h5 className="mb-3">Add New Address</h5>

        <div className="row g-3">

          <div className="col-md-6">
            <input
              type="text"
              name="house"
              value = {formData.house}
              className="form-control"
              placeholder="House No."
              onChange={handleChange}
            />
          </div>

          <div className="col-md-6">
            <input
              type="text"
              name="street"
              value = {formData.street}
              className="form-control"
              placeholder="Street"
              onChange={handleChange}
            />
          </div>

          <div className="col-12">
            <textarea
              className="form-control"
              value = {formData.area}
              rows="3"
               name="area"
              placeholder="Area"
              onChange={handleChange}
            ></textarea>
          </div>

          <div className="col-md-6">
            <input
              type="text"
               name="city"
               value = {formData.city}
              className="form-control"
              placeholder="City"
              onChange={handleChange}
            />
          </div>

          <div className="col-md-6">
            <input
              type="text"
               name="pincode"
               value = {formData.pincode}
              className="form-control"
              placeholder="Pincode"
              onChange={handleChange}
            />
          </div>

          <div className="col-12">
            <button className="btn btn-dark w-100" onClick={handleSave}>
              Save Address
            </button>
          </div>

        </div>
      </div>

    </div>
     </>
  );
}