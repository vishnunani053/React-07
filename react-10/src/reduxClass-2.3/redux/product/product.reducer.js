import { DECR, INCR } from "./product.action"

let initialState={
    productName:"one plus",
    price:59999,
    qty:1,
    img:"https://m.media-amazon.com/images/I/3121+oL3B3S._AC_SY780_.jpg"
}
let productReducer=(state=initialState,action)=>{
    switch (action.type){
        case INCR:
        return {
            ...state,qty:state.qty+1
        }
    
        case DECR:
            return{
                 ...state,qty:state.qty-1
            }
        
            default :
            return state
    }
}
export {productReducer}