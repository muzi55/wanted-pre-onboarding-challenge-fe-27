import React, { useEffect, useState } from 'react'
import TodoItem from '../components/todo/TodoItem'
import { ITodoItem, ITodoItemProps } from '../types/TextField'
import axios from 'axios'

function Home() {
  const [data, setData] = useState<ITodoItemProps[]>([])
  const token = localStorage.getItem('token')
  const getData = async () => {
    const res = await axios.get(`${import.meta.env.VITE_SERVER_API}/todos`, {
      headers: {
        Authorization: token,
      },
    })

    console.log(res.data)
  }
  useEffect(() => {
    getData()
  })
  return (
    <div>
      <div>
        {/* // 투두 작성 섹션  */}
        <button>투두 작성하기</button>
      </div>
      <div>
        {/* // 투두 리스트 섹션 */}
        <ul>
          <TodoItem
            title="투두 1"
            content="투두 내용"
            id="1"
            createdAt="2021-08-25"
            updatedAt="2021-08-25"
            onEdit={() => {}}
            onDelete={() => {}}
          />
        </ul>
      </div>
    </div>
  )
}

export default Home
