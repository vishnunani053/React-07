import React from "react"; 
class Product extends React.Component{
    constructor(props){
super(props);
this.state={
name:"iphone",
Image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh_TiTSqW2DF1SAAT4IbCfAXozxbSPf7FY7w&usqp=CAU",
price:80000,
quantity:1,
total:""
}
    }
    incHandler=()=>{
this.setState({quantity:this.state.quantity +1})
    }
    decHandler=()=>{
this.setState({quantity:this.state.quantity -1})
    }
    render(){
        return <div>
       <div className="container mt-5">
        <div className="row">
        <div className="col-md-8">
       <table className="table">
       <thead className="bg-dark text-primary">
        <th>Name</th>
        <th>Image</th>
        <th>Price</th>
        <th>Quantity</th>
        <th>Total</th>
       </thead>
        <tbody>
            <td>{this.state.name}</td>
           <td><img src={this.state.Image}></img></td>  
            <td>{this.state.price}</td>  
            <td><i className="fa fa-minus-circle" onClick={this.decHandler} ></i>{this.state.quantity} <i className="fa fa-plus-circle" onClick={this.incHandler}></i></td>
            <td>{this.state.price*this.state.quantity}</td>
            </tbody>
       </table>

         </div>
        </div>
        </div>
        </div>
    }
}
export default Product