import React from 'react'
import { getDeliveryRows } from '../Adapters/ArticleAdapter'
import { useState, useEffect } from 'react'
import DeliveryRowsData from './DeliveryRowsData'
import { Link } from 'react-router-dom'
import DeliveryDetails from './DeliveryDetails';


const DeliveryRows = ({ delivery }) => {
  const [deliveryRows, setDeliveryRows] = useState([]);
 

  useEffect(() => {
    const deliveryRows = async () => {
      const deliveryRowsFromServer = await getDeliveryRows(delivery.deliveryId);
      setDeliveryRows(deliveryRowsFromServer)
    }

    deliveryRows();
  }, [])



  return (
    <div>
        <br />
        <p><b><Link to={`/deliveries/${delivery.deliveryId}`}>Orderinfo</Link></b></p>
    </div>
  )
}

export default DeliveryRows