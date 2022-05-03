import React from 'react'
import Header from '../components/Header'
import { useState, useEffect } from 'react'
import DeliveryList from '../components/DeliveryList';
import AddDelivery from '../components/AddDelivery';
import { getDeliveriesAPI } from '../Adapters/ArticleAdapter';

const Deliveries = () => {
  
  const [deliveries, setDeliveries] = useState([]);

useEffect (() => {
  const getDeliveries = async () => {
    const deliveriesFromServer = await getDeliveriesAPI();
    setDeliveries(deliveriesFromServer)
  }

getDeliveries();
}, [])

const addOrder = (delivery) => {
  console.log(delivery);
  

}
 
   
  return (
    <div className='container'>
      <Header title='Ordervy' />
      <AddDelivery onAdd={addOrder}/>
        <DeliveryList deliveries={deliveries} />
    </div>
  )
}

export default Deliveries