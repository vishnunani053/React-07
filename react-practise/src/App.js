import React from 'react'
import Navbar from './Navbar/Navbar'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import UserApp from './Contact-App/UserApp'
import Home from './Contact-App/Home'
const App = () => {
  return (
    <div>
    <Router>
       <Navbar/>
       <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/users' element={<UserApp/>}/>
       </Routes>
    </Router>
       
    </div>
  )
}

export default App