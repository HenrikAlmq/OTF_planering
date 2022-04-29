import Header from "./Header"
import { ArticleList } from "./ArticleList"
import { useState, useEffect } from 'react'
import AddArticle from "./AddArticle"

const Articles = () => {
  const [articles, setArticles] = useState([
    {
        ProductId: 1,
        ArticleNumber: "Unik keps",
        ArticleDescription: "Snapback grön",
        Barcode: 7237374374,
        Volume: 1.5,
        Weight: 1,
        InStock: true
    },
    {
        ProductId: 2,
        ArticleNumber: "ChelseaFC keps",
        ArticleDescription: "Snapback blå",
        Barcode: 7237374374,
        Volume: 1,
        Weight: 1.5,
        InStock: true
    },
    {
        ProductId: 3,
        ArticleNumber: "McLarenF1 keps",
        ArticleDescription: "Snapback orange",
        Barcode: 7237374374,
        Volume: 0.5,
        Weight: 2,
        InStock: false
    }
])

useEffect(() => {
    console.log(articles)
}, [articles])


//Ta bort artikel
const deleteArticle = (id) => {
  setArticles(articles.filter((article) => article.ProductId !== id))
}

//Lägg till artikel
const addArticle = (article) => {
  
  const ProductId = Math.floor(Math.random() * 1000) + 1
  const newArticle = { ProductId, ...article }
  setArticles([...articles, newArticle])
}

  return (
    <div className="container">
      <Header title='Artikelvy' />
      <AddArticle onAdd={addArticle} />
      {articles.length > 0 ? <ArticleList articles={articles} onDelete={deleteArticle}/> : 'Inga artiklar skapade'}
    </div>
  )
}

export default Articles