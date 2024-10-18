import React, { useState } from 'react'
import TextInput from './TextInput'
import TextError from './TextError'
import { ITextInputProps } from '../../types/TextField'
import style from './TextField.module.css'

interface ITextFieldProps extends ITextInputProps {
  errorMessage: string
}

export default function TextField({
  value,
  onChange,
  placeholder,
  type,
  name,
  id,
  errorMessage,
}: ITextFieldProps) {
  const [isFocused, setIsFocused] = useState<Boolean>(true)

  const handleFocus = (type: boolean) => {
    setIsFocused(type)
  }
  return (
    <div
      onFocus={() => handleFocus(true)}
      onBlur={() => handleFocus(false)}
      className={`${style.textField} ${isFocused ? style.active : ''}`}
    >
      <TextInput
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        type={type}
        name={name}
        id={id}
      />

      <TextError>{errorMessage}</TextError>
    </div>
  )
}
