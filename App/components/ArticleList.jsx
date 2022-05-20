import {useEffect} from 'react'

export const ArticleList = ({ articles, onDelete, ArticlePage, deliveryData, onAdd, incomingDeliveryData }) => {
   
  return (
    <>
        {articles.map((article, index) => (
        <ArticlePage key={index} article={article} onDelete={onDelete} deliveryData={deliveryData} onAdd={onAdd} incomingDeliveryData={incomingDeliveryData}/>
        ))}
    </>
  )
}
