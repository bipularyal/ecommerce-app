import React from 'react';
import './custom-button.styles.css';
const CustomButton = ({children, isGoogleSignIn,...otherProps})=> (
    // isGoogleSignIn for conditional styling if the button is google sign in
    <button className={`${isGoogleSignIn? 'google-sign-in' : ''} custom-button`} {...otherProps}>
        {children}
    </button>
)
export default CustomButton;