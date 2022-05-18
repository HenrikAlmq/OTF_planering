import {useEffect} from 'react'

export const ArticleList = ({ articles, onDelete, ArticlePage, deliveryData, onAdd }) => {
   
  return (
    <>
        {articles.map((article, index) => (
        <ArticlePage key={index} article={article} onDelete={onDelete} deliveryData={deliveryData} onAdd={onAdd} />
        ))}
    </>
  )
}
