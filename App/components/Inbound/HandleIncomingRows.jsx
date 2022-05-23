import React from 'react'
import { useState } from 'react'

const HandleIncomingRows = ({ deliveryRows }) => {
    const [recievedQuantity, setRecievedQuantity] = useState('');
    const [location, setLocation] = useState('');
    console.log(deliveryRows)
    return (
        <div className='handle-incoming-rows-container'>
            <div className='handle-incoming-rows'>
                <p>Hanterad: {deliveryRows.handled ? 'Ja' : 'Nej'}</p>
                <p>Artikelnummer: {deliveryRows.articleNumber}</p>
                <p>Beställt antal: {deliveryRows.orderedAmount}</p>
                <input type="number" placeholder='Mottaget antal' onChange={(e) => setRecievedQuantity(e.target.value)} />
                <input type="text" placeholder='Lagerplats' onChange={(e) => setLocation(e.target.value)} />
                <input className='input-dr' type="submit" value="Leverera in" />
            </div>
        </div>
    )
}

export default HandleIncomingRows