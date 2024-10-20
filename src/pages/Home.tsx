import React from 'react'
import TodoItem from '../components/todo/TodoItem'

function Home() {
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
