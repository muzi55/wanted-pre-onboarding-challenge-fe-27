import { useEffect } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'

import Auth from '../pages/Auth'
import Home from '../pages/Home'
import Layout from '../layout/Layout'
import Write from '../pages/Write'
import Detail from '../pages/Detail'

function Router() {
  const navigate = useNavigate()
  const token = localStorage.getItem('token')

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
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/write" element={<Write />} />
          <Route path="/:id" element={<Detail />} />
        </Route>
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </>
  )
}

export default Router
