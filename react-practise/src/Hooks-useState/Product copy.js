import React, { useState } from 'react'


const Product = () => {
    let [Product, setProduct] = useState({ name: "iphone-13", price: 80000, qty: 5 })
    let incrHandler = () => {
        setProduct({ ...Product, qty: Product.qty + 1 })
    }
    return (
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-md-6'>
                    <table className='table table-hover'>
                        <thead className='table bg-dark text-white'>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Qty</th>
                            <th>Total</th>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{Product.name}</td>
                                <td>{Product.price}</td>
                                <td> <i className='fa fa-minus-circle' onClick={()=>{setProduct({...Product,qty:Product.qty-1})}}></i>{Product.qty}<i className='fa fa-plus-circle' onClick={incrHandler}></i></td>
                                <td>{Product.price*Product.qty}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    )
}

export default Product