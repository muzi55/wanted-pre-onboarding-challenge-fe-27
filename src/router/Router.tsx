import React, { useEffect } from 'react'
import {
  BrowserRouter,
  Route,
  RouterProvider,
  Routes,
  useNavigate,
} from 'react-router-dom'
import Login from '../pages/Login'
import Auth from '../pages/Auth'
import Home from '../pages/Home'

function Router() {
  const navigate = useNavigate()
  const token = localStorage.getItem('token')
  console.log('token', token)
  useEffect(() => {
    if (!token || token === 'undefined') {
      alert(`토큰이 없습니다.
로그인 페이지로 이동합니다.`)
      navigate('/auth')
      return
    }
  }, [])
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </>
  )
}

export default Router
