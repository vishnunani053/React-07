/* import React from 'react'
import Axios from "axios"
class Product extends React.Component {
    state = {
        products: []
    }
    componentDidMount = () => {
        Axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
            console.log(response.data)
            this.setState({ products: response.data })
        }).catch(() => {

        });
    }

    render() {
        return <div className='container mt-5'>
        <pre>{JSON.stringify(this.state)}</pre>
            <div className='row'>
                <div className='col-md-6'>
                    <table className='table bg-dark text-white'>
                        <thead>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Email</th>
                        </thead>
                        <tbody>
                        {
                            this.state.products.length>0?<>
                                {
                                   this.state.products.map((product)=>{
                                    return <tr>
                                        <td>{product.id}</td>
                                        <td>{product.name}</td>
                                        <td>{product.email}</td>
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

export default Product  */



import React from "react";
import Axios from "axios"
class product extends React.Component{
    state={
        products:[]
    }
    componentDidMount=()=>{
        Axios.get("https://jsonplaceholder.typicode.com/users").then((response)=>{
            this.setState({products:response.data})
        }).catch(()=>{

        })
    }
    render(){
        return <div className="container">
        <div className="row">
        <div className="col-md-6">
        <pre>{JSON.stringify(this.state)}</pre>
            <table className="table">
                <thead className="table bg-dark text-white">
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                </thead>
                <tbody>
                {
                    this.state.products.length>0?<>
                        {
                            this.state.products.map((product)=>{
                                return <tr>
                                    <td>{product.id}</td>
                                    <td>{product.name}</td>
                                    <td>{product.email}</td>
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
export default product