import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrAction, incrAction } from '../redux/product/product.action'


const Product = () => {
    let dispatch=useDispatch()
   let product=useSelector((state)=>{
    return state
   })
   let incrHandler=()=>{
    dispatch(incrAction())
   }
   let decrHandler=()=>[
    dispatch(decrAction())
   ]
  return (
    <div className='container'>
        <div className='row'>
            <div className='col-md-8'>
                <table className='table table-hover'>
                    <thead className='bg-dark text-white'> 
                    <th>Image</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Qty</th>
                    <th>Total</th>
                    </thead>
                    <tbody>
                        <tr>
                        <tr><img src={product.img}></img></tr>
                        <td>{product.productName}</td>
                        <td>{product.price}</td>
                        <td><i className='fa fa-minus-circle' onClick={decrHandler}></i>{product.qty}<i className='fa fa-plus-circle' onClick={incrHandler}></i></td>
                        <td>{product.price*product.qty}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  )
}

export default Product