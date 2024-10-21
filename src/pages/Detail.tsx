import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ITodoItem } from '../types/TextField'
import TodoItem from '../components/todo/TodoItem'

function Detail() {
  const param = useParams()

  const [data, setData] = useState<ITodoItem>({
    id: '',
    title: '',
    content: '',
    createdAt: '',
    updatedAt: '',
  })

  const getData = async () => {
    const { data } = await axios.get(
      `${import.meta.env.VITE_SERVER_API}/todos/${param.id}`,
      {
        headers: {
          Authorization: localStorage.getItem('token'),
        },
      }
    )

    setData(data.data)
  }

  useEffect(() => {
    getData()
  }, [])
  //   console.log(param.id)
  return (
    <div>
      <TodoItem
        key={data.id}
        title={data.title}
        content={data.content}
        id={data.id}
        createdAt={data.createdAt}
        updatedAt={data.updatedAt}
        onEdit={() => {
          console.log(1)
        }}
        onDelete={() => {
          console.log(2)
        }}
      />
    </div>
  )
}

export default Detail
