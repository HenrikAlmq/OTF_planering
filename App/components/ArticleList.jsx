import {useEffect} from 'react'

export const ArticleList = ({ articles, onDelete, ArticlePage, deliveryData }) => {
   
  return (
    <>
        {articles.map((article, index) => (
        <ArticlePage key={index} article={article} onDelete={onDelete} deliveryData={deliveryData}/>
        ))}
    </>
  )
}
