import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./Home/Home"
import Navbar from './Navbar/Navbar'
import User from './user/User'
import {Provider} from "react-redux"
import { store } from './redux/Store'

const App = () => {
    return (
        <div>
        <Provider store={store}>
            <Router>
                <Navbar />
                <Routes>
                    <Route path='/' element={<Home />}></Route>
                    <Route path='/user' element={<User />}></Route>
                </Routes>
            </Router>
            </Provider>
        </div>
    )
}

export default App