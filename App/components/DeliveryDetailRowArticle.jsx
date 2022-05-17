import React from 'react'
import { useState } from 'react'

const DeliveryDetailRowArticle = ({ article, deliveryData }) => {
    const [pickedQuantity, setpickedQuantity] = useState(0);
    const [quantity, setQuantity] = useState('');
    const [picked, setPicked] = useState(false);

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(deliveryData.deliveryId, article.articleNumber ,article.productId, quantity, pickedQuantity, picked);
        setQuantity('');
    }
    return (
        <>
            <form onSubmit={onSubmit}>
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
