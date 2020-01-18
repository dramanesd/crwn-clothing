import React from 'react';

import './custom-button.styles.scss';

const CustomButton = ({children, IsGoogleSignIn, ...ohterProps}) => (
  <button className={`${IsGoogleSignIn ? 'google-sign-in' : ''} custom-button`} {...ohterProps}>
    {children}
  </button>
);

export default CustomButton;