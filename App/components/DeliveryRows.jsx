import React from 'react'
import { getDeliveryRows } from '../Adapters/ArticleAdapter'
import {useState} from 'react'

const DeliveryRows = ({ delivery }) => {
  const [deliveryRows, setDeliveryRows] = useState('');
  console.log(delivery);

  const deliveryRowData = getDeliveryRows(delivery.deliveryId)
  console.log(deliveryRowData);

  return (
    <div>
      <p>Artikelnummer:</p>
      <p>Antal: 4</p>
    </div>
  )
}

export default DeliveryRows