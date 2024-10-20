import React from 'react'
import { ITodoItemProps } from '../../types/TextField'

export default function TodoItem({
  title,
  content,
  id,
  createdAt,
  updatedAt,
}: ITodoItemProps) {
  return (
    <li>
      <div>
        <h3>{title}</h3>
        <div>
          <button>수정</button>
          <button>삭제</button>
        </div>
      </div>
      <p>{content}</p>
    </li>
  )
}
