import { productReducer } from "./product/product.reducer";
import { composeWithDevTools } from "@redux-devtools/extension"
import { createStore } from "redux"
let store = createStore(productReducer, composeWithDevTools())
export { store }