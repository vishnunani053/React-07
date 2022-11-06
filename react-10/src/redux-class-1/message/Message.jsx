import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { gmAction, gnAction } from '../redux/message/message.action'

 const Message = () => {
    let dispatch=useDispatch()
    let message=useSelector((state)=>{
        return state
    })
    let gmHandler=()=>{
        dispatch(gmAction())
    }
    let gnHandler=()=>{
        dispatch(gnAction())
    }
  return (
    <div>
        <h1>message Component:{message.msg}</h1>
        <button className='btn btn-primary' onClick={gmHandler}>GM</button>&nbsp;
        <button className='btn btn-success' onClick={gnHandler}>GN</button>

    </div>
  )
}
export default Message