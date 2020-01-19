import React from 'react';

import './custom-button.styles.scss';

const CustomButton = ({children, IsGoogleSignIn, inverted, ...ohterProps}) => (
  <button 
    className={`
    ${inverted ? 'inverted' : ''}
    ${IsGoogleSignIn ? 'google-sign-in' : ''} 
    custom-button`}
    {...ohterProps}
  >
    {children}
  </button>
);

export default CustomButton;