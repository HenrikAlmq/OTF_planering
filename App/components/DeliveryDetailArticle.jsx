import React from 'react'

const DeliveryDetailArticle = ({ article }) => {

  console.log(article)

  return (
    <div>
        <p>Artikelnummer: {article.articleNumber}</p>
        <p>Artikelbeskrivning: {article.articleDescription}</p>
    </div>
  )
}

export default DeliveryDetailArticle