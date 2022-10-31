import React from 'react'

function Message() {
let state={
    wish:"hello"
}
let gmHandler=()=>{
    
}
  return (
    <div>
      <pre>{JSON.stringify(state)}</pre>
    <h1>Wish:{gmHandler}</h1>
    <button onClick={gmHandler}>Gm</button>
    </div>
  )
}

export default Message
