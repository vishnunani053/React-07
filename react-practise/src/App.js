import React from 'react'
import {Provider} from "react-redux"
import { Product } from '../src/product/product'
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


