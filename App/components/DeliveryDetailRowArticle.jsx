import React from 'react'

const DeliveryDetailRowArticle = ({ article }) => {
    console.log(article)
    return (
        <>
            <div>
                Artikelnummer: {article.articleNumber}
                Streckkod: {article.barcode}
            </div>
        </>
    )
}

export default DeliveryDetailRowArticle
