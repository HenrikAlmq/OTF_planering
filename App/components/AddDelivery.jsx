import React from 'react'
import { useState } from 'react'

const AddDelivery = ({ onAdd }) => {
    const [orderId, setOrderNumber] = useState('');
    const [deliveryAddress, setDeliveryAddress] = useState('');
    const [zipcode, setZipcode] = useState('');
    const [phoneNumber, setphoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [deliveryStatusId, setdeliveryStatusId] = useState(1);
    const [freightServiceId, setfreightServiceId] = useState(1);

    const onSubmit = (e) => {
        e.preventDefault(); //Ladda ej om sidan

        if (!orderId) {
            alert("Ordernummer är obligatoriskt");
            return
        }

        onAdd({orderNumber: orderId, deliveryAddress, zipcode, phoneNumber, email, deliveryStatusId, freightServiceId})
        setOrderNumber('');
        setDeliveryAddress('');
        setZipcode('');
        setphoneNumber('');
        setEmail('');


    }

    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className="form-control">
                <input type="text" placeholder="Ordernummer" value={orderId} onChange={(e) => setOrderNumber(e.target.value)} />
            </div>
            <div className="form-control">
                <input type="text" placeholder="Leveransadress" value={deliveryAddress} onChange={(e) => setDeliveryAddress(e.target.value)} />
            </div>
            <div className="form-control">
                <input type="text" placeholder="Postnummer" value={zipcode} onChange={(e) => setZipcode(e.target.value)} />
            </div>
            <div className="form-control">
                <input type="text" placeholder="Telefonnummer" value={phoneNumber} onChange={(e) => setphoneNumber(e.target.value)} />
            </div>
            <div className="form-control">
                <input type="text" placeholder="Mejladress" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <input type="submit" value='Skapa order' />
        </form>
    )
}

export default AddDelivery