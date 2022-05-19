import React from 'react'
import DeliveryList from '../components/DeliveryList'
import Header from '../components/Header'
import IncomingDelivery from '../components/Inbound/IncomingDelivery'
import { useState, useEffect } from 'react'
import { getIncomingDeliveriesAPI } from '../Adapters/IncomingDeliveryAdapter'

const Inbound = () => {
  const [incomingDeliveries, setIncomingDeliveries] = useState([]);

  useEffect(() => {
    const getIncomingDeliveries = async () => {
      const incomingDeliveriesFromServer = await getIncomingDeliveriesAPI();
      setIncomingDeliveries(incomingDeliveriesFromServer);
    }

    getIncomingDeliveries();
  }, [])

  console.log(incomingDeliveries)

  return (
    <div className='container'>
        <Header title={"Inleveransvy"} />
        <DeliveryList data={incomingDeliveries} Comp={IncomingDelivery} placeholder={"Sök efter inköpsordernummer..."} filter={"purchaseOrderId"} />
    </div>
  )
}

export default Inbound