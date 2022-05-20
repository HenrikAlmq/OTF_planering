import React from 'react'
import DeliveryList from '../components/DeliveryList'
import Header from '../components/Header'
import IncomingDelivery from '../components/Inbound/IncomingDelivery'
import { useState, useEffect } from 'react'
import { getIncomingDeliveriesAPI } from '../Adapters/IncomingDeliveryAdapter'
import AddIncomingDelivery from '../components/Inbound/AddIncomingDelivery'

const Inbound = () => {
  const [incomingDeliveries, setIncomingDeliveries] = useState([]);

  useEffect(() => {
    const getIncomingDeliveries = async () => {
      const incomingDeliveriesFromServer = await getIncomingDeliveriesAPI();
      setIncomingDeliveries(incomingDeliveriesFromServer);
    }

    getIncomingDeliveries();
  }, [])

  const postIncomingDelivery = (incomingDelivery) => {
    console.log(incomingDelivery);
  }



  return (
    <div className='container'>
      <Header title={"Inleveransvy"} />
      <AddIncomingDelivery onAdd={postIncomingDelivery} />
        <DeliveryList data={incomingDeliveries} Comp={IncomingDelivery} placeholder={"Sök efter inköpsordernummer..."} filter={"purchaseOrderId"} />
        
    </div>
  )
}

export default Inbound