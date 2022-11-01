import React, { useState } from 'react'

const Product = () => {
    let [Product, setProduct] = useState({ name: "samsung", price: 20000, qty: 7 })
    let incrHandler = () => {
        setProduct({ ...Product, qty: Product.qty + 1 })
    }


    return (
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-md-6'>
                    <table className='table table-hover'>
                        <thead className='table bg-success text-white'>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Qty</th>
                            <th>Total</th>
                        </thead>
                        <tbody>
                            <tr>
                            <td><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLyNM7iUrgRGrn9w-JRgntyREw0MeNTSGg_tbGstBl9pzrj61RVmbOoikUm8PXlzNn6I4&usqp=CAU'></img></td>
                                <td>{Product.name}</td>
                                <td>{Product.price}</td>
                                <td><i className='fa fa-minus-circle' onClick={() => { setProduct({ ...Product, qty: Product.qty - 1 }) }}></i>{Product.qty}<i className='fa fa-plus-circle' onClick={incrHandler}></i></td>
                                <td>{Product.price * Product.qty}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    )
}

export default Product