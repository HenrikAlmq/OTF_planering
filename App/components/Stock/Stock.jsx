import React from 'react'
import { useState, useEffect } from 'react'
import Header from '../Header'
import DeliveryList from '../DeliveryList'
import { getQuantityPerStockAPI } from '../../Adapters/StockAdapter'
import ShowStock from './ShowStock'


const Stock = () => {
  const [stock, setStock] = useState([]);
  const [error, setError]  = useState([]);

  useEffect(() => {
    const getStock = async () => {
      const [stockFromServer, error] = await getQuantityPerStockAPI();
      setStock(stockFromServer);
      setError(error);
    }

    getStock();
  }, [])

  if (error && error.length > 0 ) {
    console.log(error);
    return (
      <h3>Kunde inte ladda in saldo, kontakta helpdesk med felkod: {error.message}</h3>
    )
  }
 
  

  return (
    <div className='container'>
      <Header title={"Lagervy"} />
        <DeliveryList data={stock} Comp={ShowStock} placeholder={"Sök efter artikelnummer.."} filter={"articleNumber"} />
    </div>
  )
}

export default Stock