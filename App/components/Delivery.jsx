import React from 'react'
import { FaArrowDown, FaArrowUp } from 'react-icons/fa'
import { useState, useEffect, useContext } from 'react'
import DeliveryRows from './DeliveryRows'
import { getDeliveryRowsAPI } from '../Adapters/DeliveryAdapter'
import { UserContext } from '../index'
import axios from 'axios'


const Delivery = ({ delivery }) => {
  const [showOrder, setShowOrder] = useState(false);
  const [deliveryRows, setDeliveryRows] = useState('');
  const userName = useContext(UserContext);

  useEffect(() => {
    const getDeliveryRowsFromServer = async () => {
      const deliveryRowsFromServer = await getDeliveryRowsAPI(delivery.deliveryId)
      setDeliveryRows(deliveryRowsFromServer);
    } 


    getDeliveryRowsFromServer();
  }, [])


  const body = {deliveryRows}
  //console.log(body);


 for (let i = 0; i < deliveryRows.length; i++) {
  console.log(deliveryRows[i])
 }
 

 

  const handleClick = () => {
    console.log("CLICKED!")
    for (let i = 0; i < deliveryRows.length; i++) {
      
      axios.post(`http://localhost:27585/api/ProductStockPosition/create`, deliveryRows[i], {
            headers: {
                'Content-type': 'application/json'
            }
        }).then(res => {
            setStockPos([...stockPos, res.data])
        })
    }
    
  }

  return (
    <>
      <div className='form-container'>
      
        <div className='form-check'>
          <h3>Ordernummer: {delivery.orderId} {showOrder ? <FaArrowUp className='icons' style={{cursor: 'pointer' }} onClick={() => setShowOrder(false)}/> : <FaArrowDown className='icons' style={{cursor: 'pointer' }} onClick={() => setShowOrder(true)} /> }</h3>
          <p>Leveransadress: {delivery.deliveryAddress} </p>
          <p>Postnummer: {delivery.zipCode} <button onClick={handleClick}>Allokera</button></p>
          <p>Telefonnummer: {delivery.phoneNumber}</p>
          <p>Mejladress: {delivery.email}</p>
          <p>Status: {delivery.deliveryStatusId}</p>
          <p>Frakt: {delivery.freightServiceId}</p>
          {showOrder && <DeliveryRows delivery={delivery} />}
        </div>
      </div>
    </>
  )
}

export default Delivery