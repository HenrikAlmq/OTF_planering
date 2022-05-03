import React from 'react'
import Header from '../components/Header'
import { useState } from 'react'
import DeliveryList from '../components/DeliveryList';
import AddDelivery from '../components/AddDelivery';

const Deliveries = () => {
  
  const [deliveries, setDeliveries] = useState([
    {
      DeliveryId: 1,
      OrderId: "testOrder",
      DeliveryAddress: "Kungsgatan 9G",
      Zipcode: "55331",
      PhoneNumber: "+46705790567",
      Email: "testorder@order.com",
      DeliveryStatusId: 1,
      FreightServiceId: 1
    },
    {
      DeliveryId: 2,
      OrderId: "testOrder2",
      DeliveryAddress: "Kungsgatan 10G",
      Zipcode: "55331",
      PhoneNumber: "+46705790567",
      Email: "testorder@order.com",
      DeliveryStatusId: 1,
      FreightServiceId: 1
    }
  ]);

const addOrder = (delivery) => {
  console.log(delivery);
  console.log("Order tillagd")

}
 
   
  return (
    <div className='container'>
      <Header title='Ordervy' />
      <AddDelivery onAdd={addOrder}/>
        <DeliveryList deliveries={deliveries} />
    </div>
  )
}

export default Deliveries