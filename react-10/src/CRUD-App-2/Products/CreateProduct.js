import React from 'react'
import { useState } from 'react'
import Axios from "axios"

const CreateProduct = () => {
    let [products, setProducts] = useState({
        name: "",
        image: "",
        price: "",
        qty: "",
        info: ""
    })
    let [submitted, setSubmitted] = useState(false)
    let [errMessage, setErrMessage] = useState("")

    let getProducts = (event) => {
        setProducts({ ...products, [event.target.name]: event.target.value })
    }
   /*  let imageChangeHandler = async (event) => {
        let imageFile = event.target.files[0]
        let reader = new FileReader()
        reader.readAsDataURL(imageFile)
        reader.addEventListener("load", () => {
            if (reader.result) {
                setProducts({ ...products, image: reader.result })
            }
            else {
                alert("error")
            }
        })
    } */  
let imageChangeHandler=async(event)=>{
let imageFile=event.target.files[0]
let reader=new FileReader()
reader.readAsDataURL(imageFile)
reader.addEventListener("load",()=>{
    if(reader.result){
setProducts({...products,image:reader.result})
    }else{
        alert("error")
    }
})
}

    let submitProducts = (event) => {
        event.preventDefault()
        let url = " http://127.0.0.1:5000/api/products"
        Axios.post(url, products).then((response) => {
            setSubmitted(true)
        }).catch((err) => {
            setErrMessage(err)
        })
    }

    return (
        <div>
            <h1>Create-Product</h1>
            <div className="container">
                <pre>{JSON.stringify(products)}</pre>
                <pre>{JSON.stringify(submitted)}</pre>
                <div className="row">
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-header bg-secondary text-white">Create-Product</div>
                            <form onSubmit={submitProducts}>
                                <div className="card-body">
                                    <div className='form-group'>
                                        <input type="text" name='name' className='form-control' onChange={getProducts} placeholder="Products" /></div>
                                    <div className='form-group'>
                                        <input type="number" name='price' className='form-control' onChange={getProducts} placeholder="Price" /></div>
                                    <div className='form-group'>
                                        <input type="file" name='image' onChange={imageChangeHandler} /></div>
                                    <div className='form-group'>
                                        <input type="number" name='qty' className='form-control' onChange={getProducts} placeholder="QTY" /> </div>
                                    <div className='form-group'>
                                        <input type="text" name="info" className='form-control' onChange={getProducts} placeholder="Information" />
                                    </div>
                                    <div>
                                        <input type="submit" value="create Product" onChange={getProducts} className="btn btn-primary" />
                                    </div>

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
