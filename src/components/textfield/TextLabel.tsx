import React from 'react'
import style from './TextLabel.module.css'
import { ITextLabelProps } from '../../types/TextField'

export default function TextLabel({ children, htmlFor }: ITextLabelProps) {
  return (
    <label htmlFor={htmlFor} className={style.textLabel}>
      {children}
    </label>
  )
}
