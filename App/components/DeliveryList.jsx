import React from 'react'
import Delivery from './Delivery'

const DeliveryList = ({ deliveries }) => {

    
  return (
    <>
        {deliveries.map((delivery, index) => (
            <Delivery key={index} delivery={delivery} />
        ))}
    </>
  )
}

export default DeliveryList