import React from 'react'
import Product from './product/product'
import {Provider} from "react-redux"
import { store } from './redux/store'

const App = () => {
  return (
    <div>
      <h1>App component</h1>
      <Provider store={store}>
      <Product/>
      </Provider>
     
    </div>
  )
}

export default App