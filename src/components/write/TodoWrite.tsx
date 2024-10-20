import React from 'react'
import TextLabel from '../textfield/TextLabel'
import TextInput from '../textfield/TextInput'
import { ITextInputProps } from '../../types/TextField'

interface ITodoWriteProps extends ITextInputProps {
  htmlFor: string
  label: string
}

function TodoWrite({
  htmlFor,
  label,
  onChange,
  value,
  placeholder,
  type,
  name,
  id,
  require = true,
}: ITodoWriteProps) {
  return (
    <div>
      <TextLabel htmlFor={htmlFor}>{label}</TextLabel>
      <TextInput
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        type={type}
        name={name}
        id={id}
        require={require}
      />
    </div>
  )
}

export default TodoWrite
