import React from 'react'
import { FaTimes } from 'react-icons/fa'

const IncomingDeliveryRowsData = ({ article, onDelete }) => {
    
  return (
    <table>
      <tbody>
        <tr>
          <th>Artikelnummer</th>
          <th>Beställt antal</th>
          <th>Mottaget antal</th>
          <th>Hanterad</th>
          <th>{<FaTimes style={{cursor: 'pointer'}} onClick={() => onDelete(article.incomingDeliveryRowId)}/>}</th>
        </tr>
        <tr>
          <td>{article.articleNumber}</td>
          <td>{article.orderedAmount}</td>
          <td>{article.recievedAmount}</td>
          <td>{article.handled ? "Ja" : "Nej"}</td>
        </tr>
      </tbody>
    </table>
  )
}

export default IncomingDeliveryRowsData