import Axios from "axios"

let USER_REQ="USER_REQ"
let USER_SUCESS="USER_SUCESS"
let USER_FAIL="USER_FAIL"

let userReqAction=()=>{
    return {type:USER_REQ,}
}
let userSucessAction=(users)=>{
    return {type:USER_SUCESS,payload:users }
}
let userFailAction=(error)=>{
    return {type:USER_FAIL,payload:error}
}

let fetchUserAction=()=>{
    return(dispatch)=>{
dispatch(userReqAction())
Axios.get("https://jsonplaceholder.typicode.com/users").then((response)=>{
dispatch(userSucessAction(response.data))
}).catch((err)=>{
dispatch(userFailAction(err))
})
    }
}
export{USER_REQ,USER_SUCESS,USER_FAIL,fetchUserAction}