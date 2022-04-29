import Article from "./Article"
import {useEffect} from 'react'

export const ArticleList = ({ articles, onDelete }) => {

  useEffect(() => {
   console.log("Did mount?") 
  }, [articles])

  return (
    <>
        {articles.map((article) => (
        <Article key={article.ProductId} article={article} onDelete={onDelete}/>
        ))}
    </>
  )
}
