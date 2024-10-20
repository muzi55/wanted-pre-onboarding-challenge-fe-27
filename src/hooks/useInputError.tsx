import { useState } from 'react'
import { emailPattern } from '../libs/constant'

type ErrorStatus = 'invalidFormat' | 'emptyInput' | null

interface IErrorState {
  email: ErrorStatus
  password: ErrorStatus
  rePassword: ErrorStatus
}

function useInputError() {
  const [errorState, setErrorState] = useState<IErrorState>({
    email: null,
    password: null,
    rePassword: null,
  })

  const emailCheckPatten = (value: string) => {
    return value === 'emptyInput'
      ? '이메일을 입력해주세요.'
      : value === 'invalidFormat'
        ? '이메일 형식이 아닙니다.'
        : ''
  }

  const emailErrorState = (errorMessage: ErrorStatus) => {
    setErrorState({
      ...errorState,
      email: errorMessage,
    })
  }
  const passwordErrorState = (errorMessage: ErrorStatus) => {
    setErrorState({
      ...errorState,
      password: errorMessage,
    })
  }
  const rePasswordErrorState = (errorMessage: ErrorStatus) => {
    setErrorState({
      ...errorState,
      rePassword: errorMessage,
    })
  }

  const emailCheck = (value: string) => {
    if (value === '') {
      emailErrorState('emptyInput')
      return
    }
    if (!emailPattern.test(value)) {
      emailErrorState('invalidFormat')
      return
    }
    emailErrorState(null)
    return
  }

  const passwordCheck = (value: string) => {
    if (value === '') {
      passwordErrorState('emptyInput')
      return
    }
    if (value.length < 8) {
      passwordErrorState('invalidFormat')
      return
    }
    passwordErrorState(null)
    return
  }

  const passwordReCheck = (value: string, password: string) => {
    if (value !== password) {
      rePasswordErrorState('invalidFormat')
      return
    }
    if (value === '') {
      rePasswordErrorState('emptyInput')
      return
    }
    rePasswordErrorState(null)
    return
  }

  return {
    errorState,
    emailErrorState,
    emailCheck,
    emailCheckPatten,
    passwordErrorState,
    passwordCheck,
    rePasswordErrorState,
    passwordReCheck,
  }
}

export default useInputError
