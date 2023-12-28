// import React, { useEffect, useState } from 'react';
// import { Button, Checkbox, Form, Input } from 'antd';
// import { addUser} from '../redux/slice/UserSlice';
// import {useDispatch} from 'react-redux'
// import { Link, redirect, useNavigate } from 'react-router-dom';



// const SignUp = ({isUserloggedIn}) => {

//   const dispatch = useDispatch();
//   const Navigate = useNavigate();
//   const [userLoggedIn, setUserLoggedIn] = useState(isUserloggedIn);

//   const [users, setusers] = useState(() => {
//     const savedUsers = localStorage.getItem('users');
//     if(savedUsers){
//       return JSON.parse(savedUsers);
//     }else{
//       return [];
//     }
//   }
//   );


//   useEffect(() => {
//    localStorage.setItem('users', JSON.stringify(users))
   
//   }, [users])

//   useEffect(() => {
//     isUserloggedIn && redirect('/')
//     if(isUserloggedIn){
//       Navigate('/')
//     }
//   }, [Navigate])

//   const onFinish = (values) => {
//     console.log('Success:', values);
//     SetNewUser(values);
//   };
  
//   const onFinishFailed = (errorInfo) => {
//     console.log('Failed:', errorInfo);
//   };
  
//   const SetNewUser= (values)  => {
//     const i = users.findIndex((e) => e.Email === values.Email);
//     console.log(users)
//     console.log(i)
//     if(i === -1){
//       setusers([
//           ...users,
//           {...values}
//         ])
//     }else{
//       alert('user already exist')
//     }
//   }
//   console.log(users)
//   return(
//   <Form
//     name="basic"
//     labelCol={{
//       span: 8,
//     }}
//     wrapperCol={{
//       span: 16,
//     }}
//     style={{
//       maxWidth: 600,
//     }}
//     initialValues={{
//       remember: true,
//     }}
//     onFinish={onFinish}
//     onFinishFailed={onFinishFailed}
//     autoComplete="off"
//   >
//     <Form.Item
//       label="Full Name"
//       name="fullName"
//       rules={[
//         {
//           required: true,
//           message: 'Please input your Full Name!',
//         },
//       ]}
//     >
//       <Input />
//     </Form.Item>

//     <Form.Item
//       label="Email"
//       name="Email"
//       rules={[
//         {
//           required: true,
//           // type: 'email',
//           message: 'Please input your Email!',
//         },
//       ]}
//     >
//       <Input />
//     </Form.Item>     

//     <Form.Item
//       label="Password"
//       name="password"
//       rules={[
//         {
//           required: true,
//           // min: 6,
//           message: 'Pasword must be 6 digit long'
//         },
//       ]}
//     >
//       <Input.Password />
//     </Form.Item>

//     <Form.Item
//       wrapperCol={{
//         offset: 8,
//         span: 16,
//       }}
//     >
//       <Button  htmlType="submit">
//         Submit
//       </Button>
//       <Button>
//         <Link to='/signin'>
//           Sign In
//         </Link>
//       </Button>
//     </Form.Item>
//   </Form>
// )};
// export default SignUp;



import React, { useEffect, useState } from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import { addUser} from '../redux/slice/UserSlice';
import {useDispatch} from 'react-redux'
import { Link, redirect, useNavigate } from 'react-router-dom';



const SignUp = ({isUserloggedIn}) => {

  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const [userLoggedIn, setUserLoggedIn] = useState(isUserloggedIn);

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
   localStorage.setItem('users', JSON.stringify(users))
   dispatch(addUser(users))
  }, [users])
  useEffect(() => {
    isUserloggedIn && redirect('/')
  }, [])

  const onFinish = (values) => {
    console.log('Success:', values);
    SetNewUser(values);
  };
  
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  
  const SetNewUser= (values)  => {
    const i = users.findIndex((e) => e.Email === values.Email);
    console.log(users)
    console.log(i)
    if(i === -1){
      setusers([
          ...users,
          {...values}
        ])
    }else{
      alert('user already exist')
    }
  }
  console.log(users)
  return(
    <div className='form-signup'>
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
      label="Full Name"
      name="fullName"
      rules={[
        {
          required: true,
          message: 'Please input your Full Name!',
        },
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Email"
      name="Email"
      rules={[
        {
          required: true,
          type: 'email',
          message: 'Please input your Email!',
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
          min: 6,
          message: 'Pasword must be 6 digit long'
        },
      ]}
    >
      <Input.Password />
    </Form.Item>

    <Form.Item
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2'>
        <Link to='/signin'>
        Submit
        </Link>
      </button>
      <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2'>
        <Link to='/signin'>
          Sign In
        </Link>
      </button>
    </Form.Item>
  </Form>
  </div>
)};
export default SignUp;