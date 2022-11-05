import { composeWithDevTools } from "@redux-devtools/extension"
import { msgReducer } from "./message/message.reducer";
import { createStore } from "redux"

let store = createStore(msgReducer, composeWithDevTools())
export default store