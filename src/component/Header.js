import React from 'react'
import "./Header.css"
import logo from '../image/logo.png'
import SearchIcon from '@mui/icons-material/Search'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import {Link} from "react-router-dom"
import {useStateValue} from "./StateProvider"
import  {auth} from "../firebase"


function Header() {
    const [{basket, user}, dispactch] = useStateValue()
    const handleAuthentication = () => {
        if (user) {
            auth.signOut()
        }
    }
  return (
    <div className="header">
        <Link to="/" className="header">
            <img 
                src={logo}
                className="header_logo"
            />
        </Link>        
        <div className="header_search">
            <input className="header_searchInput" type="text" />
            <SearchIcon className='header_serachIcon' />    
        </div>
        <div className="header_nav">
            <Link to={!user && "/login"}>
                <div className="header_option" onClick={handleAuthentication}>               
                    <span className="header_optionLineOne">{user ? user.email : "Hello Guest"}</span>
                    <span className="header_optionLineTwo">{user ? "Sign Out" : "Sign In"}</span>                
                </div>
            </Link>                
            <div className="header_option">
                <span className="header_optionLineOne">Return</span>
                <span className="header_optionLineTwo">& Ordens</span>
            </div>                
            <div className="header_option">
                <span className="header_optionLineOne">Your</span>
                <span className="header_optionLineTwo">Prime</span>
            </div>
            <Link to="/checkout">
                <div className="header_optionBasket">
                    <ShoppingBasketIcon />
                    <span className="header_optionLineTwo header_basketCount">{basket?.length}</span>
                </div>            
            </Link>
        </div>  
    </div>
  )
}

export default Header
