import React, { useId, useState } from 'react'
import Button from '../components/button/Button'
import TodoWrite from '../components/write/TodoWrite'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import TodoForm from '../components/write/TodoForm'

function Write() {
  const token = localStorage.getItem('token')
  const navigate = useNavigate()

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
    <TodoForm
      onSubmit={onSubmit}
      onChangeTitle={onChangeTitle}
      title={title}
      onChangeContent={onChangeContent}
      content={content}
    />
  )
}

export default Write
