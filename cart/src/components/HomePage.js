import React from 'react'
import { Link } from 'react-router-dom'

function HomePage() {
  return (
    <div className='ml-[30rem] mt-[5rem]'>
    <h1 className='text-[75px]'>
      Welcome To Food's
      <br></br>
       Kitchen
    </h1>
    <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
      <Link to='/menu'>
        Got To Menu
      </Link>
    </button>
    </div>
  )
}

export default HomePage