import React, { useEffect, useState } from "react";
import { Button, Checkbox, Form, Input } from "antd";
import { makeUserIn } from "../redux/slice/UserSlice";
import { useDispatch } from "react-redux";
import { Link, redirect, useNavigate } from "react-router-dom";
import CheckUser from "../utils/CheckUser";

const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};
const SignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = CheckUser();

  const [users, setusers] = useState(() => {
    const savedUsers = localStorage.getItem("users");
    if (savedUsers) {
      return JSON.parse(savedUsers);
    } else {
      return [];
    }
  });

  useEffect(() => {
    user === "true" && navigate("/");
  }, []);

  const onFinish = (values) => {
    const i = users.findIndex((e) => e.Email === values.email);
    if (i > -1) {
      if (
        users[i].Email === values.email &&
        users[i].password === values.password
      ) {
        makeUserLogeIn();
      } else {
        alert("invalid user name or password");
      }
    } else {
      alert("user doest not exists");
    }
  };

  const makeUserLogeIn = () => {
    dispatch(makeUserIn());
    localStorage.setItem("login", true);
    return navigate("/");
  };

  return (
    <div className="form-signup">
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 600,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              type: "email",
              message: "Please input your email!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>
        {/* 
    <Form.Item
      name="remember"
      valuePropName="checked"
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Checkbox>Remember me</Checkbox>
    </Form.Item> */}

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2">
            Submit
          </button>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2">
            <Link to={"/signup"}>SignUp</Link>
          </button>
        </Form.Item>
      </Form>
    </div>
  );
};
export default SignIn;
