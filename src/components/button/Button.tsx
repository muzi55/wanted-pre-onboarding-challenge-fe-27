import React from 'react'
import style from './Button.module.css'
type ButtonTheme = 'primary' | 'secondary'
interface IButtonProps {
  children: React.ReactNode
  onClick: () => void
  theme?: 'primary' | 'secondary'
}
function Button({ children, onClick, theme = 'primary' }: IButtonProps) {
  const primary = style.primaryButton
  const secondary = style.secondaryButton
  const color: Record<ButtonTheme, string> = { primary, secondary }

  return (
    <button className={`${style.button} ${color[theme]}`} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button
