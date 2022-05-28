import React from 'react'
import { useState } from 'react'

const HandleDeliveryRows = ({ deliveryRow, onConfirm }) => {
    const [quantity, setQuantity] = useState('');
    const [picked, setPicked] = useState('');
    const [deliveryRowId, setDeliveryRowId] = useState('');





    const addbody = (quantity, picked, deliveryRowId, deliveryId) => {
        const body = {DeliveryRowId: deliveryRowId, Picked: picked, Quantity: quantity}

        onConfirm(body, deliveryId);
    }

    

    return (
        <div>
            {deliveryRow.length > 0 ? deliveryRow.map((val) => {
                return (
                    <>
                        <div className='picking-container'>
                            <h2>Lagerplats: {val.location}</h2>
                            <p>Artikelnummer: {val.product.articleNumber}</p>
                            <p value={val.quantity} onChange={(e) => setQuantity(e.target.value)}>Antal att plocka: {val.quantity * -1}</p>
                            <br />
                            {!val.picked ? <button className='btn-pick' onClick={() => addbody(val.quantity, true, val.deliveryRowId, val.deliveryId)}>Bekräfta plock</button> : "Orderrad redan hanterad"}
                        </div>
                    </>
                )
            }) : "Order saknar orderrader"}
        </div>
    )
}

export default HandleDeliveryRows