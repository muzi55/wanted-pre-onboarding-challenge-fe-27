import React, { useId, useState } from 'react'
import TodoWrite from './TodoWrite'
import Button from '../button/Button'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

interface ITodoForm {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void
  onChangeTitle: (e: React.ChangeEvent<HTMLInputElement>) => void
  title: string
  onChangeContent: (e: React.ChangeEvent<HTMLInputElement>) => void
  content: string
}

function TodoForm({
  onSubmit,
  onChangeTitle,
  title,
  onChangeContent,
  content,
}: ITodoForm) {
  const titleId = useId()
  const contentId = useId()

  return (
    <form onSubmit={onSubmit}>
      <TodoWrite
        htmlFor={`title-${titleId}`}
        label="제목"
        onChange={onChangeTitle}
        value={title}
        placeholder="제목을 입력해주세요."
        type="text"
        name="title"
        id="title"
        require={true}
      />
      <TodoWrite
        htmlFor={`content-${contentId}`}
        label="내용"
        onChange={onChangeContent}
        value={content}
        placeholder="내용을 입력해주세요."
        type="text"
        name="content"
        id="content"
        require={true}
      />
      <Button onClick={() => {}} full={true}>
        작성하기
      </Button>
    </form>
  )
}

export default TodoForm
