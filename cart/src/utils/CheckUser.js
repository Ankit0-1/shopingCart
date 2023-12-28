import React, {useEffect, useState} from 'react'

function CheckUser() {
    const [logIn, setLogIn] = useState(()=> {
        const isLoggedIn = localStorage.getItem('login');
        return isLoggedIn;
    }
    )
  return logIn
}

export default CheckUser