import React from 'react'
import { Provider } from "react-redux"
import store from "./redux/store"
import Message from "./message/Message"
const App = () => {
  return (
    <div>
      <h1>App Component</h1>
      <Provider store={store}>
        <Message/>
      </Provider>
    </div>
  )
}

export default App