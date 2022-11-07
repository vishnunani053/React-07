import { createStore } from "redux"
import { composeWithDevTools } from "@redux-devtools/extension"
import userReducer from "./user/User.reducer"
import thunk from "redux-thunk"
import logger from "redux-logger"
import { applyMiddleware } from "redux"

let middleware = [thunk, logger]
let store = createStore(userReducer, composeWithDevTools(applyMiddleware(...middleware)))
export default store