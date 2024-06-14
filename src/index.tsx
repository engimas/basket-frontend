import { Route, Routes, useNavigate } from 'react-router-dom';
import useAuth from './hooks/useAuth';
import Home from './pages/customer/home';
import Login from './pages/login';
import { useEffect } from 'react';
import Register from './pages/register';



function Index() {
    const { isLoggedIn } = useAuth()
    const navigate = useNavigate()

    useEffect(()=>{
        if(isLoggedIn()){
            navigate('/')
        }else{
            navigate('/auth/login')
        }
    })

  return (
    <Routes>
        <Route path="/">
        <Route index element={<Home />} />
        </Route>
        <Route path="/auth">
            <Route path='/auth/login' element={<Login />} />
            <Route path='/auth/register' element={<Register />} />
        </Route>
    </Routes>
  )
}

export default Index