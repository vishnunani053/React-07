import React from 'react'
import Home from "./Home/Home"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Navbar from './Navbar/Navbar'
import UserApp from './react-app/UserApp'
const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/users' element={<UserApp />}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App