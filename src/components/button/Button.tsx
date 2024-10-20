import React from 'react'
import style from './Button.module.css'
type ButtonTheme = 'primary' | 'secondary'
interface IButtonProps {
  children: React.ReactNode
  onClick: () => void
  theme?: 'primary' | 'secondary'
  full?: boolean
}

function Button({
  children,
  onClick,
  theme = 'primary',
  full = false,
}: IButtonProps) {
  const primary = style.primaryButton
  const secondary = style.secondaryButton
  const color: Record<ButtonTheme, string> = { primary, secondary }

  const fullSize = full ? style.fullSize : ''
  return (
    <button
      className={`${style.button} ${color[theme]} ${fullSize}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button
