import Axios from 'axios'
import React, { useEffect, useState } from 'react'

const ProductList = () => {
    let [products, setProducts] = useState([])
    let [errMessage, setErrMessage] = useState("")
    useEffect(() => {
        let url = "http://127.0.0.1:5000/api/products"
        Axios.get(url).then((response) => {
            setProducts(response.data)
        }).catch((err) => {
            setErrMessage(err)
        })
    }, [])
    return (
        <div>
            <h1>Product-List</h1>
            <div className="container">
                <div className="row">
                    {
                        products.length > 0 ? <>
                            {
                                products.map((product) => {
                                    return <div className="col-md-4">
                                        <div className="card">
                                            <div className="card-header">
                                                <img src={product.image}/>
                                            </div>
                                            <div className="card-body">
                                                <ul className='list-group'>
                                                    <li className='list-group-item'>{product.name}</li>
                                                    <li className='list-group-item'>Rs: {product.price}</li>
                                                    <li className='list-group-item'>Kgs: {product.qty}</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                })
                            }
                        </> : <h3>****No-products*****</h3>
                    }
                </div>
            </div>
        </div>
    )
}

export default ProductList
