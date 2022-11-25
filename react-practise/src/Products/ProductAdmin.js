import Axios from 'axios'
import React from 'react'
import { Link } from 'react-router-dom'

const ProductAdmin = () => {
    let [products, setProducts] = React.useState([])
     React.useEffect(() => {
         getProducts()
     }, [])
    let getProducts = () => {
        let url = `http://127.0.0.1:5000/api/products`
        Axios.get(url).then((response) => {
            setProducts(response.data)
        }).catch(() => {

        })
    }
    let deleteProduct=(product_id)=>{
        let delUrl=`http://127.0.0.1:5000/api/products/${product_id}`
        Axios.delete(delUrl).then((response)=>{
            getProducts()
        }).catch(()=>{

        })
    }
    return (
        <div>
          <h1>products</h1>
          <pre>{JSON.stringify(products)}</pre>
          <div className="container">
            <div className="row">
                <div className="col-md-8">
                    <table className='table table-hover'>
                        <thead className='bg-dark text-white'>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Qty</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                products.length>0?<>
                                {
                                    products.map((product)=>{
                                        return <tr>
                                               <td>{product._id}</td>
                                               <td>{product.name}</td>
                                               <td>{product.price}</td>
                                               <td>{product.qty}</td>
                                               <td>
                                                <Link className='btn btn-success'>Update</Link>
                                                <Link onClick={deleteProduct.bind(this,product._id)} className='btn btn-danger'>Delete</Link>
                                               </td>
                                             
                                        </tr>
                                    })
                                }
                                </>:<fragment>
                                    <tr className='text-danger'>*****No Products*****</tr>
                                </fragment>
                            }
                        </tbody>
                    </table>
                </div>
            </div>
          </div>
        </div>
    )
}

export default ProductAdmin
