import React, { useEffect, useState } from 'react'
import TodoItem from '../components/todo/TodoItem'
import { ITodoItem, ITodoItemProps } from '../types/TextField'
import axios from 'axios'
import Button from '../components/button/Button'
import { useNavigate } from 'react-router-dom'

function Home() {
  const navigate = useNavigate()
  const [data, setData] = useState<ITodoItemProps[]>([])
  const token = localStorage.getItem('token')

  const getData = async () => {
    const { data } = await axios.get(
      `${import.meta.env.VITE_SERVER_API}/todos`,
      {
        headers: {
          Authorization: token,
        },
      }
    )
    setData(data.data)
    console.log(data.data)
  }

  useEffect(() => {
    getData()
  }, [])
  return (
    <div>
      <div>
        {/* // 투두 작성 섹션  */}
        <Button
          onClick={() => {
            navigate('/write')
          }}
          full={true}
        >
          투두 쓰로 가기
        </Button>
      </div>
      <div>
        {/* // 투두 리스트 섹션 */}
        <ul style={{ height: '700px', overflowY: 'scroll' }}>
          {data.map((item: ITodoItem) => (
            <TodoItem
              key={item.id}
              title={item.title}
              content={item.content}
              id={item.id}
              createdAt={item.createdAt}
              updatedAt={item.updatedAt}
              onEdit={() => {
                console.log(1)
              }}
              onDelete={() => {
                console.log(2)
              }}
            />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Home
