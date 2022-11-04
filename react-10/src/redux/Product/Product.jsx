import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrAction, incrAction } from '../Redux/product/product.action'

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
                        <thead className='bg-dark text-white'>
                            <tr>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Qty</th>
                                <th>total</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{product.productName}</td>
                                <td>{product.price}</td>
                                <td><i className='fa fa-minus-circle' onClick={decrHandler}></i>{product.qty}<i className='fa fa-plus-circle' onClick={incrHandler}></i></td>
                                <td>{product.price * product.qty}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export { Product }
