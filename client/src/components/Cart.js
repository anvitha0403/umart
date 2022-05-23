import React from 'react'
import AuthGuard from './hoc/AuthGuard'

const Cart = () => {
    return (
    
        <div>Cart</div>
     
    );
}

export default AuthGuard(Cart)