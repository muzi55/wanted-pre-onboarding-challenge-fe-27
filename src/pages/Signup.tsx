import React, { useId, useState } from 'react'
import TextField from '../components/textfield/TextField'
import { emailPattern } from '../libs/constant'
import useInputError from '../hooks/useInputError'

export default function Signup() {
  const {
    errorState,
    emailErrorState,
    emailCheck,
    emailCheckPatten,
    passwordErrorState,
    passwordCheck,
    rePasswordErrorState,
    passwordReCheck,
  } = useInputError()

  // console.log('errorState', errorState)

  const emailId = useId()
  const passwordId = useId()
  const rePasswordId = useId()

  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [rePassword, setRePassword] = useState<string>('')

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  console.log(errorState)

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

  const handlePasswordReChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    rePasswordErrorState(null)
    setRePassword(value)
  }

  return (
    <section className="w-100">
      <h1>Signup</h1>
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

        <TextField
          value={rePassword}
          onChange={handlePasswordReChange}
          placeholder="비밀번호 재확인"
          type="password"
          name="rePassword"
          id={`rePassword-${rePasswordId}`}
          label="Re-enter Password"
          htmlFor={`rePassword-${rePasswordId}`}
          onBlur={() => passwordReCheck(rePassword, password)}
          isError={!!errorState.rePassword}
          errorMessage={
            errorState.rePassword === 'emptyInput'
              ? '비밀번호를 입력해주세요.'
              : errorState.rePassword === 'invalidFormat'
                ? '비밀번호가 일치하지 않습니다.'
                : ''
          }
        />
        <button type="submit">signup</button>
      </form>
    </section>
  )
}
