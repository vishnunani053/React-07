import { INCR, DECR } from "./product.action"
let initialState = {
    productName: "iphone-15",
    price: 99999,
    qty: 1,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf6BfNFQQ2gJrg6HsIJkp8S1xO8xwU8Unq2A&usqp=CAU"
}
let productReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCR:
            return {
                ...state, qty: state.qty + 1
            }
        case DECR:
            return {
                ...state, qty: state.qty - 1
            }
        default:
            return state

    }
}
export { productReducer }