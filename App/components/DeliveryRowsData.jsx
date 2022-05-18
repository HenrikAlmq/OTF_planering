import React from 'react'
import { useEffect } from 'react'


const DeliveryRowsData = ({ article }) => {

  return (
    <table>
      <tbody>
        <tr>
          <th>Artikelnummer</th>
          <th>Ursprungsantal</th>
          <th>Plockat antal</th>
          <th>Plockad</th>
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