import Axios from 'axios'
import React from 'react'
import { useState } from 'react'

const CreateProduct = () => {
    let [submitted, setSubmitted] = useState(false)
    let [products, setProducts] = useState({
        name: "",
        price: "",
        qty: "",
        image: "",
        info: ""
    })
    let getinput = (event) => {
        setProducts({ ...products, [event.target.name]: event.target.value })
    }
        
    let changeImageHandler = async (event) => {
        let imageFile = event.target.files[0]
        let reader = new FileReader();
        reader.readAsDataURL(imageFile)
        reader.addEventListener("load", () => {
            if (reader.result) {
                setProducts({
                    ...products,
                    image: reader.result
                })
            }
            else {
                alert("Error")
            }
        })
    }

    let submitProduct = (event) => {
        event.preventDefault()
        let url = `http://127.0.0.1:5000/api/products`
        Axios.post(url, products).then((response) => {
            setSubmitted(true)
        }).catch(() => {

        })

    }
    return (
        <div className='container'>
            <h1>Create Products</h1>
            <pre>{JSON.stringify(products)}</pre>
            <pre>{JSON.stringify(submitted)}</pre>
            <div className="row">
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-header bg-info">
                            <h3>Create Products</h3>
                        </div>

                        <div className="card-body">
                            <form onSubmit={submitProduct}>
                                <div className='form-group'>
                                    <input type="text" name="name" className='form-control' onChange={getinput} placeholder=" products" /></div>
                                <div className='form-group'>
                                    <input type="number" name="price" className='form-control' onChange={getinput} placeholder=" price" /></div>
                                <div className='form-group'>
                                    <input type="number" name="qty" className='form-control' onChange={getinput} placeholder="quantity" /></div>
                                <div className='form-group'>
                                    <input type="file" name="image" className='form-control-file' onChange={changeImageHandler} placeholder="image" /></div>
                                <div className='form-group'>
                                    <input type="text" name="info" className='form-control' onChange={getinput} placeholder="information" /></div>
                                <div>
                                    <input type="submit" value="create product" className='btn btn-primary' onChange={getinput}></input>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default CreateProduct