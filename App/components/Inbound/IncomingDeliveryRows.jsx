import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

const IncomingDeliveryRows = ({ delivery }) => {
  return (
    <div>
        <br />
        <p><b><Link to={`/inbound/${delivery.incomingDeliveryId}`}>Orderinfo</Link></b></p>
    </div>
  )
}

export default IncomingDeliveryRows