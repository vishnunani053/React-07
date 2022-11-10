import React, { useState } from 'react'
import { useEffect } from 'react'
import Axios from "axios"

const ProductList = () => {
  let [products, setProducts] = useState([])
  useEffect(() => {
    let url = " http://127.0.0.1:5000/api/products"
    Axios.get(url).then((response) => {
      setProducts(response.data)
    }).catch(() => {

    })
  }, [])
  return (
    <div>
      <h1>ProductList</h1>
      <div className="container">
        <div className="row">
          {
            products.length > 0 ? <>
            {
              products.map((product)=>{
                return <div className="col">
                  <div className="card">
                    <div className="card-header">
                      <img src={product.image} alt="" />
                    </div>
                    <div className="card-body">
                      <ul className='list-group'>
                        <li className='list-group-item'>{product.name}</li>
                        <li className='list-group-item'>{product.price}</li>
                        <li className='list-group-item'>{product.qty}</li>
                      </ul>
                    </div>
                  </div>
                </div>
              })
            }
            
            </> : <h1>****No Products****</h1>
          }
        </div>
      </div>
    </div>
  )
}

export default ProductList
  