import React, { useId, useState } from 'react'
import Button from '../components/button/Button'
import TodoWrite from '../components/write/TodoWrite'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Write() {
  const navigate = useNavigate()
  const token = localStorage.getItem('token')
  const titleId = useId()
  const contentId = useId()

  const [title, setTitle] = useState<string>('')
  const [content, setContent] = useState<string>('')

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_SERVER_API}/todos`,
        {
          title,
          content,
        },
        {
          headers: {
            Authorization: token,
          },
        }
      )
      console.log(res)
      navigate('/')
    } catch (error) {
      console.error(error)
    }
  }

  const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value)
  }

  const onChangeContent = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value)
  }

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
        htmlFor={`content-${titleId}`}
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

export default Write
