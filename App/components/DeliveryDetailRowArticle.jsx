import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios';


const DeliveryDetailRowArticle = ({ article, deliveryData }) => {
    const [pickedQuantity, setpickedQuantity] = useState(0);
    const [quantity, setQuantity] = useState('');
    const [picked, setPicked] = useState(false);
    const [deliveryRows, setDeliveryRows] = useState('');


    const onSubmit = (e) => {
        e.preventDefault();

        if (!quantity) {
            alert("Antal är obligatoriskt");
            return
        }

        const body = {DeliveryId: deliveryData.deliveryId, ProductId: article.productId, OriginalQuantity: quantity, PickedQuantity: pickedQuantity, Picked: picked, ArticleNumber: article.articleNumber }
        
        postDeliveryRow(body)
        setQuantity('');
    }

    const postDeliveryRow = (deliveryRow) => {
        axios.post('http://localhost:27585/api/DeliveryRow/create', deliveryRow, {
            headers: {
                'Content-type': 'application/json'
            }
        }).then(res => {
            setDeliveryRows([...deliveryRows, res.data])
        })
    }
    
    return (
        <>
            <form className='form-deliveryRow' onSubmit={onSubmit}>
                <table>
                    <tbody>
                        <tr>
                            <th>Artikelnummer</th>
                            <th>Artikelbeskrivning</th>
                            <th>Vikt</th>
                            <th>Volym</th>
                            <th>Antal</th>
                        </tr>
                        <tr>
                            <td>{article.articleNumber}</td>
                            <td>{article.articleDescription}</td>
                            <td>{article.weight}</td>
                            <td>{article.volume}</td>
                            <td>
                            <input className='input-number' type="number" placeholder='antal' onChange={(e) => setQuantity(e.target.value)} />
                            <input className='input-dr' type="submit" value="Lägg till" />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </>
    )
}

export default DeliveryDetailRowArticle
