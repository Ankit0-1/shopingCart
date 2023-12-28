import React from 'react'
import {data} from '../Assets/const/Data'
import { useDispatch, useSelector } from 'react-redux'
import { addItem, removeItem } from '../redux/slice/CartSlice'

function Menu() {

  const dispatch = useDispatch()
  const itemsInStore = useSelector((store) => store.cart)

  const items = data.map((item) => {
    const img = window.location.origin + "/Images/"+ item.image;
    const i = itemsInStore.items.findIndex(e => e.id === item.id);
    const total = itemsInStore?.items?.[i]?.quan;
    const price = total* item.price

  return(<div className='items' key={item.id}>
      <img src={img} alt={item.name} />
      <h3>{item.name}</h3>

      {
        i > -1 &&  (
          <>
          <p>Total: {total} </p>
          <p>Cost: {price}</p>
          </>
        )
      }
 
      <p> Price: {item.price}</p>
      <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2' onClick={() => handleAddItem(item)}>
        +
      </button>
      <button className={ i > -1 ? 'bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded' :'py-2 px-4 font-bold rounded border '} onClick={() => handleRemoveItem(item.id)}>
        -
      </button>
    </div>)
  })

  const handleAddItem = (item) => {
    console.log('first')
    dispatch(addItem(item))
  }

  const handleRemoveItem = (id) => {
    dispatch(removeItem(id));
  }
  return ( 
    <div className='food-items'>{items}</div>
  )
}

export default Menu