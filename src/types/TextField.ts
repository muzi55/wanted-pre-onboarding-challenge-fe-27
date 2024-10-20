type TextInputType = 'email' | 'password'

export interface ITextLabelProps {
  children: React.ReactNode
  htmlFor: string
}
export interface ITextInputProps {
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  placeholder: string
  type: TextInputType
  name: string
  id: string
}

export interface ITodoItem {
  title: string
  content: string
  id: string
  createdAt: string
  updatedAt: string
}

export interface ITodoItemProps extends ITodoItem {
  onEdit: () => void
  onDelete: () => void
}
