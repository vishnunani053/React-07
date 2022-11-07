import { USER_FAIL, USER_REQ, USER_SUCESS } from "./User.action"

let initialState={
    users:[],
    errorMsg:"",
    loading:false
}
let userReducer=(state=initialState,action)=>{
let {type,payload}=action
switch(type){
case USER_REQ:
    return {...state,loading:true}
    case USER_SUCESS:
        return {...state,users:payload}
        case USER_FAIL:
            return {...state,errorMsg:payload,loading:false}
            default:
                return state
}

}
export {userReducer}