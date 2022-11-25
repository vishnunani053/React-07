import React from 'react'
import Axios from 'axios'
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
    let deleteProduct = (productid) => {
        let delurl = `http://127.0.0.1:5000/api/products/${productid}`
        Axios.delete(delurl).then((response) => {
            // write some business logic
            getProducts()
        }).catch(() => {

        })
    }
    return (
        <div>
            <pre>{JSON.stringify(products)}</pre>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h2>Product Details</h2>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus dicta asperiores, fugit sapiente unde iure praesentium itaque quibusdam nihil dolores optio aperiam esse nemo accusantium quaerat dolorum blanditiis ipsa maiores.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-8">
                        <table className='table table-hover'>
                            <thead className='bg-dark text-white'>
                                <tr>
                                    <th>S.No</th>
                                    <th>Name</th>
                                    <th>price</th>
                                    <th>Qty</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    products.length > 0 ? <>
                                        {
                                            products.map((product) => {
                                                return <tr key={product._id}>
                                                    <td>{product._id}</td>
                                                    <td>{product.name}</td>
                                                    <td>{product.price}</td>
                                                    <td>{product.qty}</td>
                                                    <td>
                                                        <Link className='btn btn-success'>Update</Link>
                                                        <Link onClick={deleteProduct.bind(this, product._id)} className='btn btn-danger'>Delete</Link>
                                                    </td>
                                                </tr>
                                            })
                                        }
                                    </> : <React.Fragment>
                                        <tr>
                                            <td className='text-danger'>*****No Products******</td>
                                        </tr>
                                    </React.Fragment>
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
