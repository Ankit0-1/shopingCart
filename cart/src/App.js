import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import HomePage from "./components/HomePage";
import Menu from "./components/Menu";
import Header from "./components/Header";
import { useSelector } from "react-redux";

function App() {
  const isUserloggedIn = useSelector((store) => store.user.isLogedIn);
  console.log(isUserloggedIn);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header isUserloggedIn={isUserloggedIn} />}>
          <Route index element={<HomePage />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/menu" element={<Menu />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
