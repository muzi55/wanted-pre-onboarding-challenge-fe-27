import React from 'react'
import { ITodoItemProps } from '../../types/TextField'
import Button from '../button/Button'
import style from './TodoItem.module.css'

export default function TodoItem({
  title,
  content,
  id,
  createdAt,
  updatedAt,
  onEdit,
  onDelete,
}: ITodoItemProps) {
  return (
    <li className={style.item}>
      <div className={style.itemHeader}>
        <h3>{title}</h3>
        <div>
          <Button onClick={onEdit}>수정</Button>
          <Button onClick={onDelete} theme="secondary">
            삭제
          </Button>
        </div>
      </div>
      <p className={style.itemBody}>{content}</p>
    </li>
  )
}
