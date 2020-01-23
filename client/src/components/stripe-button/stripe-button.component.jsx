import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({price}) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_NCj2b6mJOwzftii58E0GJJx300S9V51iGw';

  const onToken = token => {
    axios({
      url: 'payment',
      method: 'post',
      data: {
        amount: priceForStripe,
        token
      }
    }).then(response => {
      alert('Payment successful');
      // console.log(response);
    }).catch(error => {
      console.log('Payment error: ', error);
      alert('There was an issue with your payment. Please make sure you use the provided credit cart.');
    });
  };

  return (
    <StripeCheckout
      label='Pay Now'
      name='CRWN Clothing LTD.'
      billingAddress
      shippingAddress
      image='https://sendeyo.com/up/d/f3eb2117da'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  )
};

export default StripeCheckoutButton;