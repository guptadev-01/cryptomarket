import React, { useContext } from 'react'
import './Navbar.css'
import arrow_icon from '../assets/arrow_icon.png'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'
import { CoinContext } from '../CoinContext'
import { logout } from '../Home/Firebase'

const Navbar = () => {

  const {setCurrency} = useContext(CoinContext);
  const currencyHandler = (e) => {
    switch(e.target.value){
      case 'usd':{
        setCurrency({name:'usd', symbol:'$'});
        break;
      }
      case 'eur':{
        setCurrency({name:'eur', symbol:'€'});
        break;
      }
      case 'inr':{
        setCurrency({name:'inr', symbol:'₹'});
        break;
      }
      default:{
        setCurrency({name:'usd', symbol:'$'});
        break;
      }
    }
  }
  

  return (
    <div className='navbar'>
      <Link to={'/'}>
        <img className='logo' src={logo} alt="" />
      </Link>
      <ul>
        <Link to={'/'}><li>Home</li></Link>
        <li>Feature</li>
        <li>Pricing</li>
        <li>Blog</li>
      </ul>
      <div className="nav-right">
        <select onChange={currencyHandler}>
          <option value="usd">USD</option>
          <option value="eur">EURO</option>
          <option value="inr">INR</option>
        </select>
        <button onClick={()=>{logout()}}>Sign up <img src={arrow_icon} alt="" /></button>
      </div>
    </div>
  )
}

export default Navbar