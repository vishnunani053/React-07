import React, { Component } from "react";
 class Product extends React.Component{
       state={
            product:{
            name:"samsung f62",
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7aS1O5R6foapBfAoxng5y9-3bC5eBOui7-zOehxmnKaVWGHfbGOWr5C23_wo79AT1Wfs&usqp=CAU",
            price:20000,
            quantity:1,}
        }
    
    incHandler=()=>{
        this.setState({quantity:this.state.quantity+1})
    }
    decHandler=()=>{
        this.setState({quantity:this.state.quantity})
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
           <td>{this.state.product.name}</td>
           <td><img src={this.state.product.image}></img></td>
           <td>{this.state.product.price}</td> 
           <td><i class="fa fa-plus-circle" onClick={this.incHandler}></i>{this.state.product.quantity}<i class="fa fa-minus-circle" onClick={this.decHandler}></i></td>
           <td>{this.state.price * this.state.quantity}</td>      
            </tbody>
       </table>

         </div>
        </div>
        </div>
    </div>
}
 }
 export default Product