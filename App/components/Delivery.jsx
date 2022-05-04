import React from 'react'
import { FaArrowDown, FaArrowUp } from 'react-icons/fa'
import { useState } from 'react'
import DeliveryRows from './DeliveryRows'

const Delivery = ({ delivery }) => {
  const [showOrder, setShowOrder] = useState(false);
  console.log(delivery)

  return (
    <>
      <div className='form-container'>
      
        <div className='form-check'>
          
          <h3>Ordernummer: {delivery.orderId} {showOrder ? <FaArrowUp className='icons' style={{cursor: 'pointer' }} onClick={() => setShowOrder(false)}/> : <FaArrowDown className='icons' style={{cursor: 'pointer' }} onClick={() => setShowOrder(true)} /> }</h3>
          <p>Leveransadress: {delivery.deliveryAddress}</p>
          <p>Postnummer: {delivery.zipCode}</p>
          <p>Telefonnummer: {delivery.phoneNumber}</p>
          <p>Mejladress: {delivery.email}</p>
          <p>Status: {delivery.deliveryStatusId}</p>
          <p>Frakt: {delivery.freightServiceId}</p>
          {showOrder && <DeliveryRows />}
        </div>
      </div>
    </>
  )
}

export default Delivery