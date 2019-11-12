import React from 'react'
import { FaMinusCircle, FaPlusCircle } from 'react-icons/fa'
import './Quantity.scss'

function Quantity({ onChange, quantity = 1 }) {
  function subtract() {
    if (quantity > 0) {
      onChange(quantity - 1)
    }
  }

  function add() {
    onChange(quantity + 1)
  }

  return (
    <div className="quantity-picker">
      <div>
        <div>
          <button type="button" className="icon-button" onClick={subtract}>
            <FaMinusCircle />
          </button>
        </div>
        <div className="input-container">
          <input type="text" onChange={e => onChange(e.target.value)} value={quantity} />
        </div>
        <div>
          <button type="button" className="icon-button" onClick={add}>
            <FaPlusCircle />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Quantity