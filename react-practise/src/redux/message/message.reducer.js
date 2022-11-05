import {GM,GN} from "./message.action"
let initialState = {
    msg: "hello"
}
let msgReducer = (state = initialState,action) => {
    switch (action.type) {
        case GM:
            return { msg: "helllo goood morning..rahul gandhi"}
        case GN:
            return { msg: "helllo good night" }
            default:
                 return state
    }

}
export{msgReducer}