import React, { useEffect } from 'react'
import Navbar from './Navbar/Navbar'
import Home from './Home/Home'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Footer from './Footer/Footer'
import Coin from './Coin/Coin'
import Login from './Login/Login'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './Home/Firebase'

const App = () => {

  const navigate = useNavigate()
  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if(user){
        console.log('Logged In');
        navigate('/');
      }else{
        console.log('Logged Out')
        navigate('/login')
      }
    })
  },[])

  return (
    <div className='app'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/coin/:coinId' element={<Coin />} />
        <Route path='/login' element={<Login />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App