import React from 'react'
import { useState } from 'react'
import { FaArrowDown, FaArrowUp } from 'react-icons/fa'
import StockRows from './StockRows'

const ShowStock = ({ delivery, subItem }) => {
  const [displayStock, setDisplayStock] = useState(false);


  

  return (
    <div className='form-container'>
      <div className='form-check'>
        <h3>Artikelnummer: {delivery.articleNumber} {displayStock ? <FaArrowUp className='icons' style={{ cursor: 'pointer' }} onClick={() => setDisplayStock(false)} /> : <FaArrowDown className='icons' style={{ cursor: 'pointer' }} onClick={() => setDisplayStock(true)} />}</h3>
        {displayStock && <StockRows delivery={delivery} />}
      </div>
    </div>
  )
}

export default ShowStock