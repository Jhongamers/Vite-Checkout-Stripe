import React from 'react';
import { Stripe,loadStripe } from '@stripe/stripe-js';


// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.

let stripePromisse: Promise<Stripe | null>;

const getStripe = () =>{
    if(!stripePromisse){
      stripePromisse = loadStripe(`pk_test_51LlJfRAKq1PRN8BJNMDazQNUBenZch9CW9s3T8LoZn2O9dtHbUTAamj2Jyriw302w8Pkt3LyDrdYTPEeQO8Efj2v00QvKTAgui`);
    }
    return stripePromisse;
}
const CheckButton: React.FC = () => {
   
  async function handleClick () {
    
    // When the customer clicks on the button, redirect them to Checkout.
    const stripe = await getStripe();
    const { error } = await stripe.redirectToCheckout({
      lineItems: [{
        price: 'price_1Llo25AKq1PRN8BJ8odUKWk7', // Replace with the ID of your price
        quantity: 1,
      }],
      mode: 'payment',
      successUrl: 'http://127.0.0.1:5173/success',
      cancelUrl: 'http://127.0.0.1:5173/cancel',
    });
        if(error){
            console.log(error);
        }
  };
  return (
    <button role="link" onClick={handleClick}>
      Checkout
    </button>
  );
}
export default CheckButton;