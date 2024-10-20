import React from 'react'
import Login from './Login'
import Signup from './Signup'

function Auth() {
  return (
    <div className="flex">
      <Login />
      <Signup />
    </div>
  )
}

export default Auth
