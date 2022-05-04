import Article from "./Article"
import {useEffect} from 'react'

export const ArticleList = ({ articles, onDelete }) => {
  
  return (
    <>
        {articles.map((article, index) => (
        <Article key={index} article={article} onDelete={onDelete}/>
        ))}
    </>
  )
}
