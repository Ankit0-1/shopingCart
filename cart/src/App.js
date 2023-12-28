import React from 'react'
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import HomePage from './components/HomePage'
import Menu from './components/Menu';
import FoodItem from './components/FoodItems';
import Header from './components/Header';
import store from './redux/store/store';
import { Provider } from 'react-redux';
import { useSelector } from 'react-redux';
import CheckUserHook from './utils/CheckUserHook';

function App() {
  const checkUser = CheckUserHook();
  console.log(checkUser, 'user')
  const isUserloggedIn = useSelector((store) => store.user.isLogedIn);
  console.log(isUserloggedIn);
  return(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Header />} >
      <Route index element={<HomePage />} />
      <Route path='/signin' element={isUserloggedIn ? <HomePage /> : <SignIn isUserloggedIn={isUserloggedIn} />}  />
      <Route path='/signup' element={isUserloggedIn ? <HomePage /> : <SignUp isUserloggedIn={isUserloggedIn}/>}  />
      <Route path='/menu' element={<Menu />}  />
      <Route path='/menu' element={<FoodItem />}  />
    </Route>
    </Routes> 
  </BrowserRouter>
  )
}

export default App