import React from 'react'
import AuthGuard from './hoc/AuthGuard'

const DashBoard = () => {
    return (
      <AuthGuard>
        <div>DashBoard</div>
      </AuthGuard>
    );
}

export default DashBoard