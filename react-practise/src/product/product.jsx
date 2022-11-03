import React from 'react'
import { useDispatch, useSelector } from "react-redux"
import { decrAction, incrAction } from '../redux/product/product.action'

const Product = () => {
    let dispatch = useDispatch()
    let product = useSelector((state) => {
        return state
    })
    let incrHandler = () => {
        dispatch(incrAction())
    }
    let decrHandler = () => {
        dispatch(decrAction())
    }
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-6'>
                    <table className='table table-hover'>
                        <thead className='text-white bg-primary'>
                            <tr>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>total</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{product.productName}</td>
                                <td><i className='fa fa-minus-circle' onClick={incrHandler}></i>{product.price}<i className='fa fa-minus-circle' onClick={decrHandler}></i></td>
                                <td>{product.quantity}</td>
                                <td>{product.price * product.quantity}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export { Product }