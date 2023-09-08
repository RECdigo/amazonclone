import React from 'react'
import "./Checkout.css"
import Subtotal from "./Subtotal.js"
import checkoutphoto from "../image/checkout_One.jpg"
import {useStateValue} from "./StateProvider"
import CheckoutProduct from "./CheckoutProduct"

function Checkout() {
  const [{basket, user}, dispactch] = useStateValue()
  return (    
    <div className="checkout">      
        <div className='checkout_left'>
            <img className='checkout_ad' src={checkoutphoto} alt=""/>            
            <div className="checkout_title">
                <h3>Hello {user?.email}</h3>
                <h2>Your shopping Basket</h2>
            </div>       
                {basket.map(item => {
                  return (                                          
                      <CheckoutProduct                      
                        id= {item.id}
                        title= {item.title}
                        image= {item.image}
                        price= {item.price}
                        rating= {item.rating}                      
                      />       
                  )
                })}       
        </div>
        <div className='checkout_right'>
            <Subtotal/>
        </div>
    </div>    
  )}

export default Checkout
