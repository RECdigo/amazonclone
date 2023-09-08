
import './App.css';
import Home from "./component/Home"
import Checkout from "./component/Checkout"
import Login from "./component/Login"
import { BrowserRouter, Routes, Route, Link, Router, Switch } from "react-router-dom"
import React, { useEffect } from "react"
import { auth } from "./firebase"
import {useStateValue} from "./component/StateProvider"
import Payment from "./component/Payment"
import Layout from "./component/Layout"
import { loadStripe } from "@stripe/stripe-js"
import { Elements } from "@stripe/react-stripe-js" 

const promise = loadStripe
('pk_test_51NkyZGL7ZcWMouynRyaDzCHFFFk6DtKFiaGwVLtWbrg4hWcVX3lGBsNDxFUq1MupvSSlzLxpbRoGtCdwAB4GuWFX00ZXSfrJGl')


function App() {

  const [{}, dispatch] = useStateValue()
  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log("The user is ===>", authUser)
      if (authUser) {
        dispatch({          
          type:'SET_USER',
          user: authUser
        })

      }else{
        dispatch({          
          type:'SET_USER',
          user: null
        })        
      }
    })

  },[])

  return (
      <div className="app">        
        <BrowserRouter>  
          <Routes>          
            <Route element={<Layout/>} > 
              <Route index element={<Home/>} />   
              <Route path="/checkout" element={<Checkout/>} />                        
              <Route path="/payment" element={<Elements stripe={promise}><Payment /></Elements>} />
            </Route>                 
          <Route path="/login" element={<Login/>} />          
          </Routes>      
        </BrowserRouter>        
      </div>     
  );
}

export default App;
