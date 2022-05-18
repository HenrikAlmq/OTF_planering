import React from 'react'
import { useEffect } from 'react'
import { FaTimes } from 'react-icons/fa'


const DeliveryRowsData = ({ article, onDelete }) => {
  return (
    <table>
      <tbody>
        <tr>
          <th>Artikelnummer</th>
          <th>Ursprungsantal</th>
          <th>Plockat antal</th>
          <th>Plockad</th>
          <th>{<FaTimes style={{cursor: 'pointer'}} onClick={() => onDelete(article.deliveryRowId)}/>}</th>
        </tr>
        <tr>
          <td>{article.articleNumber}</td>
          <td>{article.originalQuantity}</td>
          <td>{article.pickedQuantity}</td>
          <td>{article.picked ? "Ja" : "Nej"}</td>
        </tr>
      </tbody>
    </table>
  )
}

export default DeliveryRowsData