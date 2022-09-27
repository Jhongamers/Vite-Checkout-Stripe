import React from 'react';
import { Stripe,loadStripe } from '@stripe/stripe-js';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.


interface Props{

  id: string;

}

let stripePromisse: Promise<Stripe | null>;

const getStripe = () =>{
    if(!stripePromisse){
      stripePromisse = loadStripe(`${import.meta.env.VITE_PUBLIC_KEY}`);
    }
    return stripePromisse;
}
const CheckButton: React.FC<Props> = ({id}) => {
   
  async function handleClick () {
    
    // When the customer clicks on the button, redirect them to Checkout.
    const stripe = await getStripe();
    const { error } = await stripe!.redirectToCheckout({
      lineItems: [{
        price: `${id}`, // Replace with the ID of your price
        quantity: 1,
      },
      ],
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
      Buy Item
    </button>
  );
}
export default CheckButton;