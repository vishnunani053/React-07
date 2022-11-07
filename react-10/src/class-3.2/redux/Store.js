import {createStore} from "redux"
import userReducer from "./user/User.reducer"
import { composeWithDevTools } from "@redux-devtools/extension"
import logger from "redux-logger"
import thunk from "redux-thunk"
import { applyMiddleware } from "redux"

let middleware = [thunk, logger]
let store = createStore(userReducer, composeWithDevTools(applyMiddleware(...middleware)))
export default store