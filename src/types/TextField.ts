type TextInputType = 'email' | 'password'

export interface ITextInputProps {
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  placeholder: string
  type: TextInputType
  name: string
  id: string
}
