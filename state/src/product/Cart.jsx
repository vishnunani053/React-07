import React, { Component } from "react";
 class Cart extends React.Component{
       state={
            product:{
            name:"samsung f62",
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7aS1O5R6foapBfAoxng5y9-3bC5eBOui7-zOehxmnKaVWGHfbGOWr5C23_wo79AT1Wfs&usqp=CAU",
            price:20000,
            quantity:1,
            total:""}
        }
    
    incHandler=()=>{
        this.setState({product:{...this.state.product,quantity:this.state.product.quantity+1}})
    }
    decHandler=()=>{
        this.setState({product:{...this.state.product,quantity:this.state.product.quantity-1}})
    }
render(){
 return <div>
       <div className="container mt-5">
        <div className="row">
        <div className="col-md-8">
       <table className="table">
       <thead className="bg-dark text-success">
        <th>Name</th>
        <th>Image</th>
        <th>Price</th>
        <th>Quantity</th>
        <th>Total</th>
       </thead>
        <tbody>
        <tr>
           <td>{this.state.product.name}</td>
           <td><img src={this.state.product.image}></img></td>
           <td>{this.state.product.price}</td> 
           <td><i className="fa fa-minus-circle" onClick={this.decHandler} ></i> &nbsp;{this.state.product.quantity} &nbsp;<i className="fa fa-plus-circle" onClick={this.incHandler}></i></td>
           <td>{this.state.product.price*this.state.product.quantity}</td>  
           </tr>   
            </tbody>
       </table>

         </div>
        </div>
        </div>
    </div>
}
 }
 export default Cart
 