import React from 'react'
import TextError from '../components/textfield/TextError'

function Login() {
  return (
    <div>
      <h1>Login</h1>
      <form>
        <div>
          <label htmlFor="">email</label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="">password</label>
          <input type="password" name="" id="" />
        </div>

        <TextError>error</TextError>
      </form>
    </div>
  )
}

export default Login
