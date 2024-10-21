import React from 'react'
import { ITodoItemProps } from '../../types/TextField'
import Button from '../button/Button'
import style from './TodoItem.module.css'
import { Link, useNavigate } from 'react-router-dom'

export default function TodoItem({
  title,
  content,
  id,
  createdAt,
  updatedAt,
  onEdit,
  onDelete,
}: ITodoItemProps) {
  const navigate = useNavigate()
  const goingDetail = (id: string) => {
    navigate(`/${id}`)
  }

  return (
    <li className={style.item}>
      <div className={style.itemHeader}>
        <h3 className="cursor" onClick={() => goingDetail(id)}>
          {title}
        </h3>
        <div>
          <Button onClick={() => {}}>수정</Button>
          <Button onClick={() => {}} theme="secondary">
            삭제
          </Button>
        </div>
      </div>
      <p onClick={() => goingDetail(id)} className={style.itemBody}>
        {content}
      </p>
    </li>
  )
}
