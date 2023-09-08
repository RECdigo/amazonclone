import React, {useEffect, useState} from 'react'
import CheckoutProduct from './CheckoutProduct'
import "./Payment.css"
import {useStateValue} from "./StateProvider"
import {Link} from "react-router-dom"
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js"
import CurrencyFormat from "react-currency-format"
import {getBasketTotal} from "./reducer"
import axios from "../axios"

function Payment() {
    const [{basket, user}, dispactch] = useStateValue()
    const stripe = useStripe()
    const elements = useElements()
    const [succeeded, setSucceeded] = useState(false)
    const [processing, setProcessing] = useState("")
    const [error, setError] = useState(null)
    const [disabled, setDisabled] = useState(true)
    const [clientSecret, setClientSecret] = useState(null)

    useEffect (() => {
        const getClientSecret = async () => {
            try {
              const response = await axios.post('/v1/payment_intents', {
                amount: getBasketTotal(basket) * 100, // Amount in cents
                currency: 'usd', // Change to the desired currency
                
              });
              setClientSecret(response.data.clientSecret);
            } catch (error) {
              // Handle errors here
              console.error('Error fetching client secret:', error);
            }
        };

          getClientSecret();
          

    },[basket])   

    const handleSubmit = async (event) => {
        event.preventDefault();
        setProcessing(true);

        try {
          if (clientSecret === null) {
            throw new Error('Client secret is not yet available.');
          }

          const { paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
              card: elements.getElement(CardElement),
            },
          });

          if (paymentIntent.status === 'succeeded') {
            setSucceeded(true);
            setError(null);
            setProcessing(false);

            // Redirect to orders page after successful payment
          }
        } catch (error) {
          // Handle payment confirmation errors
          console.error('Payment confirmation error:', error);
          setProcessing(false);
          setError('Payment failed. Please try again.');
        }        
    }

    const handleChange = event => {
        setDisabled(event.empty)
        setError(event.error ? event.error.message : "")
    }

  return (
    <div className='payment'>
      <div className='payment_container'>
        <h1>
           Checkout (
            <Link to="/checkout">{basket?.length} items</Link>
           ) 
        </h1>

        <div className='payment_section'>
            <div className='payment_title'>
                <h3>Delivery Adress</h3>
            </div>
            <div className='payment_address'>
                <p>{user?.email}</p>
                <p>123 React Lane</p>
                <p>São Paulo, Brazil</p>
            </div>
        </div>

        <div className='payment_section'>
            
            <div className='payment_address'>
                <h3>Review items and delivery</h3>

            </div>
            <div className='payment_items'>
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
        </div>
        <div className='payment_section'>
            <div className='payment_title'>
                <h3>Payment_details</h3>
            </div>
            <div className='payment_detail'>
                <form onSubmit={handleSubmit}>
                  <CardElement onChange={handleChange}/>
                  <div className='payment_priceContainer'>
                    <CurrencyFormat
                            renderText = {(value) => (
                                <>
                                    <h3>Order Total: {value}</h3>                                 
                                </>
                            )}
                            decimalScale={2}
                            value={getBasketTotal(basket)}
                            displayType={"text"}
                            thousandSeparaton={true}
                            prefix={"$"}
                    />  
                      <button disabled={processing || disabled || 
                          succeeded || clientSecret === null} >
                              <span>{processing ? <p>Processing</p> : "Buy Now"} </span>
                      </button>
                  </div>
                  {error && <div>{error}</div>}
                </form>
            </div>
        </div>    
      </div>
    </div>
  )
}

export default Payment
