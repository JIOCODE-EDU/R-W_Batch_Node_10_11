import React from 'react'
import Home from './Home'
import Profile from './Profile'
import Login from './Login'
import Register from './Register'
import Error from './Error'
import Header from '../components/Header'
import {Route , BrowserRouter as Router , Routes} from 'react-router-dom'

const Layout = () => {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/profile' element={<Profile/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='*' element={<Error/>}></Route>
      </Routes>
    </Router>
  )
}

export default Layout