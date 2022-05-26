import React from 'react'
import Header from '../components/Header'
import { useState, useEffect } from 'react'
import DeliveryList from '../components/DeliveryList';
import AddDelivery from '../components/AddDelivery';
import { getDeliveriesAPI } from '../Adapters/DeliveryAdapter';
import Delivery from '../components/Delivery';
import axios from 'axios';

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
  
  axios.post('http://localhost:27585/api/Delivery/create', delivery, {
      headers: {
        'Content-type': 'application/json'
      }
    }).then(res => {
      setDeliveries([...deliveries, res.data])
    })

}

   
  return (
    <div className='container'>
      <Header title='Ordervy' />
      <AddDelivery onAdd={addOrder}/>
        <DeliveryList data={deliveries} Comp={Delivery} placeholder={"Sök efter ordernummer..."} filter={"orderId"} />
    </div>
  )
}

export default Deliveries