import { userReducer } from "./user/User.reducer";
import { composeWithDevTools } from "@redux-devtools/extension"
import thunk from "redux-thunk"
import logger from "redux-logger"
import { applyMiddleware } from "redux";
import { createStore } from "redux"

let middleWare = [logger, thunk]
let store = createStore(userReducer, composeWithDevTools(applyMiddleware(...middleWare)));
export { store }