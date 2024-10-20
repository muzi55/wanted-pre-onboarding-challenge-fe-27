import { useId, useState } from 'react'
import TextField from '../components/textfield/TextField'
import useInputError from '../hooks/useInputError'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Login() {
  const navigate = useNavigate()
  const emailId = useId()
  const passwordId = useId()

  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const {
    errorState,
    emailErrorState,
    emailCheck,
    emailCheckPatten,
    passwordErrorState,
    passwordCheck,
    rePasswordErrorState,
    passwordReCheck,
    disableButton,
  } = useInputError()

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    emailErrorState(null)
    setEmail(value)
  }

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    passwordErrorState(null)
    setPassword(value)
  }

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      const bodyData = {
        email: email,
        password: password,
      }

      const res = await axios.post(
        `${import.meta.env.VITE_SERVER_API}/users/login`,
        bodyData
      )
      if (res.data.token) {
        localStorage.setItem('token', res.data.token)
        navigate('/')
      }
      console.log(res)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <section className="w-100">
      <h1>Login</h1>
      <form onSubmit={onSubmit}>
        <TextField
          value={email}
          onChange={handleEmailChange}
          placeholder="이메일"
          type="email"
          name="email"
          id={`email-${emailId}`}
          label="Email"
          htmlFor={`email-${emailId}`}
          isError={!!errorState.email}
          onBlur={() => {
            emailCheck(email)
          }}
          errorMessage={emailCheckPatten(errorState.email!)}
        />

        <TextField
          value={password}
          onChange={handlePasswordChange}
          placeholder="비밀번호"
          type="password"
          name="password"
          id={`password-${passwordId}`}
          label="Password"
          htmlFor={`password-${passwordId}`}
          onBlur={() => passwordCheck(password)}
          isError={!!errorState.password}
          errorMessage={
            errorState.password === 'emptyInput'
              ? '비밀번호를 입력해주세요.'
              : errorState.password === 'invalidFormat'
                ? '비밀번호는 8자 이상이어야 합니다.'
                : ''
          }
        />
        <button type="submit">Login</button>
      </form>
    </section>
  )
}

export default Login
