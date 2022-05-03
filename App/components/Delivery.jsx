import React from 'react'
import { FaArrowDown } from 'react-icons/fa'
import { useState } from 'react'
import DeliveryRows from './DeliveryRows' 

const Delivery = ({ delivery }) => {
    const [showOrder, setShowOrder] = useState(false);


  return (
    <div className='form-check'>
        <h3>Ordernummer: {delivery.OrderId} <FaArrowDown /></h3>
        <p>Leveransadress: {delivery.DeliveryAddress}</p>
        <p>Postnummer: {delivery.Zipcode}</p>
        <p>Telefonnummer: {delivery.PhoneNumber}</p>
        <p>Mejladress: {delivery.Email}</p>
        <p>Status: {delivery.DeliveryStatusId}</p>
        <p>Postnummer: {delivery.FreightServiceId}</p>
        {showOrder && <DeliveryRows />}
    </div>
  )
}

export default Delivery