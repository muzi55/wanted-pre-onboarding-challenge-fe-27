import React from 'react'
import TextError from '../components/textfield/TextError'
import TextInput from '../components/textfield/TextInput'

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
        <div>
          <TextInput
            value=""
            onChange={(e) => console.log(e.target.value)}
            placeholder="email"
            type="email"
            name="email"
            id="email"
          />

          <TextError>error</TextError>
        </div>
      </form>
    </div>
  )
}

export default Login
