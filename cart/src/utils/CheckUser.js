import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { makeUserIn } from "../redux/slice/UserSlice";

function CheckUser() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [logIn, setLogIn] = useState(() => {
    const isLoggedIn = localStorage.getItem("login");
    return isLoggedIn;
  });

  useEffect(() => {
    if (logIn === "true") {
      dispatch(makeUserIn());
      localStorage.setItem("login", true);
    } 
  }, []);
  return logIn;
}

export default CheckUser;
