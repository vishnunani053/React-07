import { DECR, INCR } from "./product.action"

let initialState={
    productName:"iphone-20",
    price:99999,
    qty:1,
    img:"https://3g.co.uk/userfiles/product/631b4dc9a4ae5-iphone-14-pro-max-purple.jpg"
}
let productReducer=(state=initialState,action)=>{
    switch(action.type){
    case INCR:
        return{
            ...state,qty:state.qty+1
        }
    case DECR:
        return{
            ...state,qty:state.qty-1
        }
        default:
            return state
    }
}
export {productReducer}