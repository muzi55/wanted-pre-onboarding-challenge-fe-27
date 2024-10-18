import React from 'react'
import style from './TextInput.module.css'

type TextInputType = 'email' | 'password'
interface ITextInputProps {
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  placeholder: string
  type: TextInputType
  name: string
  id: string
}

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
