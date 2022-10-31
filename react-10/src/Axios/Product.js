/*
import React from 'react'
import Axios from 'axios'

class Product extends React.Component{
    state={
       new_Products:{}
    }
    componentDidMount=()=>{
        Axios.get("https://dummyjson.com/products").then((response)=>{
            this.setState({new_Products:response.data})

        }).catch(()=>{})

    }
    render(){
        return <div className="container">
        <div className="row">
        <div className="col-md-6">
        <pre>{JSON.stringify(this.state)}</pre>
            <table className="table">
                <thead className="table bg-dark text-white">
                    <th>Id</th>
                    <th>Title</th>
                    <th>Price</th>
                </thead>
                <tbody>
                {
                   Object.keys(this.state.new_Products).length>0?<>
                    {
                        this.state.new_Products.products.map((Products)=>{
                            return <tr>
                                <td>{Products.id}</td>
                                <td>{Products.title}</td>
                                <td>{Products.price}</td>
                            </tr>

                        })
                    }
                   </>:null
                }
              
                </tbody>
            </table>
        </div>

        </div>

        </div>
    }
}
export default Product
*/

import Axios from "axios";
import React from "react";
class Product extends React.Component {
    state = {
        new_Products: {}
    }
    componentDidMount = () => {
        Axios.get("https://dummyjson.com/products").then((response) => {
            this.setState({ new_Products: response.data })
        }).catch(() => { })
    }
    render() {
        return <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <pre>{JSON.stringify(this.state)}</pre>
                    <table className="table">
                        <thead className="table bg-dark text-white">
                            <th>Id</th>
                            <th>Title</th>
                            <th>Price</th>
                        </thead>
                        <tbody>
                        {
                           Object.keys(this.state.new_Products).length>0?<> 
                           {
                            this.state.new_Products.products.map((products)=>{
                                return <tr>
                                    <td>{products.id}</td>
                                    <td>{products.title}</td>
                                    <td>{products.price}</td>
                                </tr>
                            })
                           }
                           </>:null
                        }


                        </tbody>
                    </table>
                </div>

            </div>

        </div>
    }
}
export default Product