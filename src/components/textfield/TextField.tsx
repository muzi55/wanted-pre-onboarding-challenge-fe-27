import React, { useState } from 'react'
import TextInput from './TextInput'
import TextError from './TextError'
import { ITextInputProps } from '../../types/TextField'
import style from './TextField.module.css'
import TextLabel from './TextLabel'

interface ITextFieldProps extends ITextInputProps {
  errorMessage?: string
  label: string
  htmlFor: string
}

export default function TextField({
  value,
  onChange,
  placeholder,
  type,
  name,
  id,
  errorMessage,
  label,
  htmlFor,
}: ITextFieldProps) {
  const [isFocused, setIsFocused] = useState<Boolean>(true)

  const handleFocus = (type: boolean) => {
    setIsFocused(type)
  }
  return (
    <div className={style.field}>
      <TextLabel htmlFor={htmlFor}>{label}</TextLabel>
      <div
        onFocus={() => handleFocus(true)}
        onBlur={() => handleFocus(false)}
        className={`${style.textField} ${isFocused ? style.focus : value ? style.active : ''} mb-2`}
      >
        <TextInput
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          type={type}
          name={name}
          id={id}
        />
      </div>

      {errorMessage && <TextError>{errorMessage}</TextError>}
    </div>
  )
}
