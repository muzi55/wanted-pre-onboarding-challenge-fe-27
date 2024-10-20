import React, { useState } from 'react'
import TextInput from './TextInput'
import TextError from './TextError'
import { ITextInputProps } from '../../types/TextField'
import style from './TextField.module.css'
import TextLabel from './TextLabel'

interface ITextFieldProps extends ITextInputProps {
  errorMessage?: string
  isError?: boolean | null | undefined
  label: string
  htmlFor: string
  onBlur: () => void
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
  isError,
  onBlur,
}: ITextFieldProps) {
  const [isFocused, setIsFocused] = useState<Boolean>(false)

  const handleFocus = (type: boolean) => {
    setIsFocused(type)
  }
  return (
    <div className={style.field}>
      <TextLabel htmlFor={htmlFor}>{label}</TextLabel>
      <div
        onFocus={() => handleFocus(true)}
        onBlur={() => {
          handleFocus(false)
          onBlur()
        }}
        className={`${style.textField}  ${isFocused ? style.focus : isError ? style.error : value ? style.active : ''} mb-2`}
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

      {isError && <TextError>{errorMessage}</TextError>}
    </div>
  )
}
