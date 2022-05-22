import React from 'react'
import AuthGuard from './hoc/AuthGuard'

const Cart = () => {
    return (
      <AuthGuard>
        <div>Cart</div>
      </AuthGuard>
    );
}

export default Cart