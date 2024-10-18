import { useId, useState } from 'react'
import TextField from '../components/textfield/TextField'

function Login() {
  const emailId = useId()
  const passwordId = useId()

  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  return (
    <section>
      <h1>Login</h1>
      <form>
        <TextField
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          type="email"
          name="login"
          id={`email-${emailId}`}
          label="Email"
          htmlFor={`email-${emailId}`}
        />
        <TextField
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          type="password"
          name="password"
          id={`password-${passwordId}`}
          label="Password"
          htmlFor={`password-${passwordId}`}
        />
        <button type="submit">Login</button>
      </form>
    </section>
  )
}

export default Login
