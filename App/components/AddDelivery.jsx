import React from 'react'
import { useState } from 'react'

const AddDelivery = ({ onAdd }) => {
    const [orderId, setOrderId] = useState('');
    const [deliveryAddress, setDeliveryAddress] = useState('');
    const [zipCode, setZipcode] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [deliveryStatusId, setdeliveryStatusId] = useState(1);
    const [freightServiceId, setfreightServiceId] = useState(1);

    const onSubmit = (e) => {
        e.preventDefault(); //Ladda ej om sidan

        if (!orderId) {
            alert("Ordernummer är obligatoriskt");
            return
        }
        console.log(deliveryStatusId);
        onAdd({ orderId, deliveryAddress, zipCode, phoneNumber, email, deliveryStatusId, freightServiceId})
        setOrderId('');
        setDeliveryAddress('');
        setZipcode('');
        setPhoneNumber('');
        setEmail('');


    }

    return (
        <>
        <form className='add-form' onSubmit={onSubmit}>
            <div className="form-control">
                <input type="text" placeholder="Ordernummer" value={orderId} onChange={(e) => setOrderId(e.target.value)} />
            </div>
            <div className="form-control">
                <input type="text" placeholder="Leveransadress" value={deliveryAddress} onChange={(e) => setDeliveryAddress(e.target.value)} />
            </div>
            <div className="form-control">
                <input type="text" placeholder="Postnummer" value={zipCode} onChange={(e) => setZipcode(e.target.value)} />
            </div>
            <div className="form-control">
                <input type="text" placeholder="Telefonnummer" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
            </div>
            <div className="form-control">
                <input type="text" placeholder="Mejladress" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <input className='input-check' type="submit" value='Skapa order' />
        </form>
        
        </>
    )
}

export default AddDelivery