import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Contact-App/Home'
import Navbar from './Navbar/Navbar'
import UserApp from './Contact-App/UserApp'

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Users />} />

        </Routes>
      </Router>
    </div>

  )
}

export default App