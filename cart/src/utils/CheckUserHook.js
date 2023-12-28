import React, {useEffect, useState} from 'react';
import { makeUserIn } from '../redux/slice/UserSlice';
import { useDispatch } from 'react-redux';

function CheckUserHook() {
    const [isLogedIn, setIsloggedIn] = useState(false);
    const dispatch = useDispatch();
    const [users, setusers] = useState(() => {
        const savedUsers = localStorage.getItem('users');
        if(savedUsers){
          return JSON.parse(savedUsers);
        }else{
          return [];
        }
      }
    );

    useEffect(() => {
     const item = localStorage.getItem('login');
     setIsloggedIn(item)
     console.log(item, 'yes');
     if(item === 'true'){
      dispatch(makeUserIn());
     }
    }, [])
  return isLogedIn
}

export default CheckUserHook;