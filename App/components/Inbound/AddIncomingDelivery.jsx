import React from 'react'
import { useState } from 'react'

const AddIncomingDelivery = ({ onAdd }) => {

    const [purchaseOrderId, setPurchaseOrderId] = useState('');
    const [deliveryAddress, setDeliveryAddress] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');

    const onSubmit = (e) => {
        e.preventDefault(); //Ladda ej om sidan

        if (!purchaseOrderId) {
            alert("Inköpsordernummer är obligatoriskt");
            return
        }
        
        onAdd({ purchaseOrderId, deliveryAddress, phoneNumber, email})
        setPurchaseOrderId('');
        setDeliveryAddress('');
        setPhoneNumber('');
        setEmail('');


    }
    

  return (
    <>
    <form className='add-form' onSubmit={onSubmit}>
        <div className="form-control">
            <input type="text" placeholder="Inköpsordernummer" value={purchaseOrderId} onChange={(e) => setPurchaseOrderId(e.target.value)} />
        </div>
        <div className="form-control">
            <input type="text" placeholder="Address" value={deliveryAddress} onChange={(e) => setDeliveryAddress(e.target.value)} />
        </div>
        <div className="form-control">
            <input type="text" placeholder="Telefonnummer" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
        </div>
        <div className="form-control">
            <input type="text" placeholder="Mejladress" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <input className='input-check' type="submit" value='Skapa inköpsorder' />
    </form>
    
    </>
  )
}

export default AddIncomingDelivery