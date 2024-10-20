import React from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import style from './Layout.module.css'
export default function Layout() {
  const navigate = useNavigate()
  const logout = () => {
    localStorage.removeItem('token')
    alert('로그아웃 되었습니다.')
    navigate('/auth')
  }
  return (
    <div>
      <header className={style.header}>
        <h1 className={style.title}>
          <Link to="/">Todo List</Link>
        </h1>

        <button onClick={logout} className={style.button}>
          로그아웃
        </button>
      </header>
      <Outlet />
    </div>
  )
}
