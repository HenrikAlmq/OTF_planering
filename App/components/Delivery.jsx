import React from 'react'
import { FaArrowDown, FaArrowUp } from 'react-icons/fa'
import { useState, useEffect, useContext } from 'react'
import DeliveryRows from './DeliveryRows'
import { getDeliveryRowsAPI } from '../Adapters/DeliveryAdapter'
import { UserContext } from '../index'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { postAllocateDelivery } from '../Adapters/DeliveryAdapter'
import { useNavigate } from "react-router-dom";


const Delivery = ({ delivery }) => {
  const [showOrder, setShowOrder] = useState(false);
  const [deliveryRows, setDeliveryRows] = useState('');
  const userName = useContext(UserContext);
  let navigate = useNavigate();

  useEffect(() => {
    const getDeliveryRowsFromServer = async () => {
      const deliveryRowsFromServer = await getDeliveryRowsAPI(delivery.deliveryId)
      setDeliveryRows(deliveryRowsFromServer);
    }


    getDeliveryRowsFromServer();
  }, [])

  // if () {
  //   return (
  //     <>
  //     <Link to={`/pickdelivery/${delivery.deliveryId}`}></Link>
  //     </>
  //   )
  // }

  const allocateDelivery = async (id) => {
    const didAllocate = await (await postAllocateDelivery(id)).data;
    console.log(didAllocate);
    if (didAllocate) {
      return navigate (`/pickdelivery/${id}`)  
    } else {
      alert("Kunde inte allokera leverans!");
    }
  }


  return (
    <>
      <div className='form-container'>

        <div className='form-check'>
          <h3>Ordernummer: {delivery.orderId} {showOrder ? <FaArrowUp className='icons' style={{ cursor: 'pointer' }} onClick={() => setShowOrder(false)} /> : <FaArrowDown className='icons' style={{ cursor: 'pointer' }} onClick={() => setShowOrder(true)} />}</h3>
          <p>Leveransadress: {delivery.deliveryAddress} </p>
          <p>Postnummer: {delivery.zipCode} <button onClick={() => allocateDelivery(delivery.deliveryId)} className='btn-pick'>Plocka</button></p>
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