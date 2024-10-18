import React from 'react'
import style from './TextError.module.css'
export default function TextError({ children }: { children: React.ReactNode }) {
  return <p className={style.errorMessage}>{children}</p>
}
