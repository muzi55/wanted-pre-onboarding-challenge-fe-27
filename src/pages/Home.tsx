import React from 'react'

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
          <li>
            <span>투두 1</span>
            <button>수정</button>
            <button>삭제</button>
          </li>
          <li>
            <span>투두 2</span>
            <button>수정</button>
            <button>삭제</button>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Home
