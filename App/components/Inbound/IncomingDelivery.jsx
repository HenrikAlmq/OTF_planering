import React from 'react'
import {useState } from 'react'
import { FaArrowDown, FaArrowUp } from 'react-icons/fa'
import IncomingDeliveryRows from './IncomingDeliveryRows'


const IncomingDelivery = ({delivery}) => {
    const [showOrder, setShowOrder] = useState(false);
    console.log(delivery)
  
    return (
      <>
        <div className='form-container'>
        
          <div className='form-check'>
            <h3>Inköpsordernummer: {delivery.purchaseOrderId} {showOrder ? <FaArrowUp className='icons' style={{cursor: 'pointer' }} onClick={() => setShowOrder(false)}/> : <FaArrowDown className='icons' style={{cursor: 'pointer' }} onClick={() => setShowOrder(true)} /> }</h3>
            <p>Leveransadress: {delivery.deliveryAddress}</p>
            <p>Telefonnummer: {delivery.phoneNumber}</p>
            <p>Mejladress: {delivery.email}</p>
            {showOrder && <IncomingDeliveryRows delivery={delivery} />}
          </div>
        </div>
      </>
    )
}

export default IncomingDelivery