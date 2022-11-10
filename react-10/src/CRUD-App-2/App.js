import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Navbar from './Navbar/Navbar'
import CreateProduct from './Products/CreateProduct'
import ProductList from './Products/ProductList'

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/Products' element={<ProductList />} />
          <Route path='/createProducts' element={<CreateProduct />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App