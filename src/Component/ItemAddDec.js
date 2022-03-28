import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrease, increase } from '../Redux/Action'

function ItemAddDec() {
const itemCount = useSelector((state)=> state.shop.itemCount)
const dispatch = useDispatch()

  return (
    <div className="card-adder">
        <button   className="dec" onClick={()=> dispatch(decrease())}>-</button>
        <input type="number" min={0} disabled value={itemCount} />
        <button  className="inc" onClick={()=> dispatch(increase())} >+</button>
      </div>
  )
}

export default ItemAddDec