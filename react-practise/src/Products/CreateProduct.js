import React from 'react'
import { useState } from 'react'
import Axios from "axios"

const CreateProduct = () => {
  let [submitted, setSubmitted] = useState(false)
  let [products, setProducts] = useState({
    name: '',
    image: '',
    price: '',
    qty: '',
    info: ''
  })

  let getProducts = (event) => {
    setProducts({ ...products, [event.target.name]: event.target.value })
  }

  let imageChangeHandler = async (event) => {
    let imageFile = event.target.files[0]
    let reader = new FileReader()
    reader.readAsDataURL(imageFile)
    reader.addEventListener("load", () => {
      if (reader.result) {
        setProducts({ ...products, image: reader.result })
      } else {
        alert("error")
      }
    })
  }

 

  let submitProducts = (event) => {
    event.preventDefault()
    let url = " http://127.0.0.1:5000/api/products"
    Axios.post(url, products).then((response) => {
      setSubmitted(true)
    }).catch(() => {

    })
  }


  return (
    <div className="container mt-5">
      <pre>{JSON.stringify(products)}</pre>
      <pre>{JSON.stringify(submitted)}</pre>
      <div className="row">
        <div className="col-md-4">
          <div className="card">
            <div className="card-header bg-secondary">
              <h2>Create-Products</h2>
            </div>
            <div className="card-body">
              <form onSubmit={submitProducts}>
                <div className='form-group'>
                  <input type="text" name='name' className='form-control' onChange={getProducts} placeholder="Products" />
                </div>
                <div className='form-group'>
                  <input type="file" name='image' onChange={imageChangeHandler} />
                </div>
                <div className='form-group'>
                  <input type="number" name='price' className='form-control' onChange={getProducts} placeholder="Price" />
                </div>
                <div className='form-group'>
                  <input type="number" name='qty' className='form-control' onChange={getProducts} placeholder="Quantity" />
                </div>
                <div className='form-group'>
                  <input type="text" name='info' className='form-control' onChange={getProducts} placeholder="Information" />
                </div>
                <div>
                  <input type="submit" value="Create-Product" onChange={getProducts} className='btn btn-primary' />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreateProduct