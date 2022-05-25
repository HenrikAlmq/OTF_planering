import React from 'react'
import { useState, useEffect } from 'react'
import Header from '../Header'
import DeliveryList from '../DeliveryList'
import { getQuantityPerStockAPI } from '../../Adapters/StockAdapter'
import ShowStock from './ShowStock'


const Stock = () => {
  const [stock, setStock] = useState([]);

  useEffect(() => {
    const getStock = async () => {
      const stockFromServer = await getQuantityPerStockAPI();
      setStock(stockFromServer);
    }

    getStock();
  }, [])

 

  return (
    <div className='container'>
      <Header title={"Lagervy"} />
        <DeliveryList data={stock} Comp={ShowStock} placeholder={"Sök efter artikelnummer.."} filter={"articleNumber"} />
    </div>
  )
}

export default Stock