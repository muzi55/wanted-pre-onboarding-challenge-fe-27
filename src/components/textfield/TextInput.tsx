import React from 'react'
import style from './TextInput.module.css'
import { ITextInputProps } from '../../types/TextField'

function TextInput({
  value,
  onChange,
  placeholder,
  type,
  name,
  id,
}: ITextInputProps) {
  return (
    <input
      className={`${style.input}`}
      type={type}
      onChange={onChange}
      value={value}
      name={name}
      id={id}
      placeholder={placeholder}
    />
  )
}

export default TextInput
