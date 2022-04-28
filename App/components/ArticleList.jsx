import Article from "./Article"

export const ArticleList = ({ articles, onDelete }) => {

  return (
    <>
        {articles.map((article) => (
        <Article key={article.ProductId} article={article} onDelete={onDelete}/>
        ))}
    </>
  )
}
