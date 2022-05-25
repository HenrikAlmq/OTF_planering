import React from 'react'
import DeliveryList from '../components/DeliveryList'
import Header from '../components/Header'
import IncomingDelivery from '../components/Inbound/IncomingDelivery'
import { useState, useEffect } from 'react'
import { getIncomingDeliveriesAPI } from '../Adapters/IncomingDeliveryAdapter'
import AddIncomingDelivery from '../components/Inbound/AddIncomingDelivery'
import AddDelivery from '../components/AddDelivery'
import axios from 'axios'

const Inbound = () => {
  const [incomingDeliveries, setIncomingDeliveries] = useState([]);

  useEffect(() => {
    const getIncomingDeliveries = async () => {
      const incomingDeliveriesFromServer = await getIncomingDeliveriesAPI();
      setIncomingDeliveries(incomingDeliveriesFromServer);
    }

    getIncomingDeliveries();
  }, [])

  const test = (incomingDelivery) => {
    axios.post('http://localhost:27585/api/IncomingDelivery/create', incomingDelivery, {
      headers: {
        'Content-type': 'application/json'
      }
    }).then(res => {
      setIncomingDeliveries([...incomingDeliveries, res.data])
    })
  }



  return (
    <div className='container'>
      <Header title={"Inleveransvy"} />
      <AddIncomingDelivery onAdd={test} />
        <DeliveryList data={incomingDeliveries} Comp={IncomingDelivery} placeholder={"Sök efter inköpsordernummer..."} filter={"purchaseOrderId"} nested={false} />
        
    </div>
  )
}

export default Inbound