import React from 'react'
import { FaArrowDown } from 'react-icons/fa'
import { useState } from 'react'
import DeliveryRows from './DeliveryRows' 

const Delivery = ({ delivery }) => {
    const [showOrder, setShowOrder] = useState(false);
    console.log(delivery)

  return (
    <div className='form-check'>
        <h3>Ordernummer: {delivery.orderId} <FaArrowDown /></h3>
        <p>Leveransadress: {delivery.deliveryAddress}</p>
        <p>Postnummer: {delivery.zipcode}</p>
        <p>Telefonnummer: {delivery.phoneNumber}</p>
        <p>Mejladress: {delivery.email}</p>
        <p>Status: {delivery.deliveryStatusId}</p>
        <p>Postnummer: {delivery.freightServiceId}</p>
        {showOrder && <DeliveryRows />}
    </div>
  )
}

export default Delivery