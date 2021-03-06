import Header from "./Header"
import { ArticleList } from "./ArticleList"
import { useState, useEffect, useContext } from 'react'
import AddArticle from "./AddArticle"
import axios from "axios"
import { getArticleAPI } from "../Adapters/ArticleAdapter"
import { deleteArticleAPI } from "../Adapters/ArticleAdapter"
import Article from "./Article"

const Articles = () => {
  const [articles, setArticles] = useState([])


  //Hook som körs vid rendering (Component did mount)
  useEffect(() => {
    const getArticles = async () => {
      const articlesFromServer = await getArticleAPI();
      setArticles(articlesFromServer)
    }
    console.log("DidMount?")
    getArticles();
  }, [])
  

  //Ta bort artikel
  const deleteArticle = async (id) => {
    deleteArticleAPI(id);
    setArticles(articles.filter((article) => article.ProductId !== id))
  }

  //Lägg till artikel
  const addArticle = async (article) => {
    axios.post('http://localhost:27585/api/Product/create', article, {
      headers: {
        'Content-type': 'application/json'
      }
    }).then(res => {
      setArticles([...articles, res.data])
    })
  }

  return (
    <div className="container">
      <Header title='Artikelvy' />
      <AddArticle onAdd={addArticle} />
      {articles.length > 0 ? <ArticleList articles={articles} onDelete={deleteArticle} ArticlePage={Article} /> : 'Inga artiklar skapade'}
    </div>
  )
}

export default Articles