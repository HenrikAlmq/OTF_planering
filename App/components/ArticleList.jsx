import Article from "./Article"

export const ArticleList = ({ articles }) => {

  return (
    <>
        {articles.map((article) => (
        <Article key={article.ProductId} article={article}/>
        ))}
    </>
  )
}
