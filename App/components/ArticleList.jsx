import {useEffect} from 'react'

export const ArticleList = ({ articles, onDelete, ArticlePage }) => {
   
  return (
    <>
        {articles.map((article, index) => (
        <ArticlePage key={index} article={article} onDelete={onDelete}/>
        ))}
    </>
  )
}
