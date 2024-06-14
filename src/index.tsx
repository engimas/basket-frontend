import { Route, Routes, useNavigate } from 'react-router-dom';
import useAuth from './hooks/useAuth';
import Home from './pages/customer/home';
import Login from './pages/login';
import { useEffect } from 'react';
import Register from './pages/register';
import Categories from './pages/customer/categories';
import NavBar from './components/navbar';
import PurchasePage from './pages/customer/purchasePage';



function Index() {
    const { isLoggedIn, user } = useAuth()
    const navigate = useNavigate()

    useEffect(()=>{
        if(!isLoggedIn()){
            navigate('/auth/login')
        }
    }, [isLoggedIn])

  return (
    <Routes>
            {user?.type === "Consumer" ?
        <>
        <Route path='/' element={<NavBar/>}>
            <Route index element={<Home />} />
            <Route path='categories' element={<Categories />} />
        <Route path='/purchase-page' element={<PurchasePage />} />
        </Route>
        </>: <></>
        }
        <Route path="/auth">
            <Route path='/auth/login' element={<Login />} />
            <Route path='/auth/register' element={<Register />} />

        </Route>
    </Routes>
  )
}

export default Index