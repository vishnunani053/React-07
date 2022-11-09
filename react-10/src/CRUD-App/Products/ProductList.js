import React from 'react'
import { useEffect } from 'react'
// import { useState } from 'react'
import Axios from "axios"
import { Fragment } from 'react'

const ProductList = () => {
    let [products, setProducts] = React.useState([])
    let [errMessage, setErrMessage] = React.useState("")
    useEffect(() => {
        let url = `http://127.0.0.1:5000/api/products`
        Axios.get(url).then((response) => {
            setProducts(response.data)

        }).catch((err) => {
              setErrMessage(err)
        })
    }, [])
    return <Fragment>
        <h1>Product-List</h1>
        <div className="container">
            <div className="row">
               {
                products.length>0?<>
                {
                    products.map((product)=>{
                        return <div className="col-md-6">
                          
                                <div className="card-header">
                                    <img src={product.image} alt="img" width='70px' />
                                </div>
                                <div className="card-body">
                                       <ul className='list-group'>
                                        <li className='list-group-item'>{product.name}</li>
                                        <li className='list-group-item'>{product.price}</li>
                                        <li className='list-group-item'>{product.qty}</li>
                                      
                                       </ul>
                                    </div>
                            </div>
                    
                    })
                }
                </>:<h4>...No products.....</h4>
               }
            </div>

        </div>
    </Fragment>
}

export default ProductList