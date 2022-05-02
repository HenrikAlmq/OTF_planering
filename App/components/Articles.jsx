import Header from "./Header"
import { ArticleList } from "./ArticleList"
import { useState, useEffect } from 'react'
import AddArticle from "./AddArticle"

const Articles = () => {
  const [articles, setArticles] = useState([])


  //Hook som körs vid rendering (Component did mount)
  useEffect(() => {
    const getArticles = async () => {
      const articlesFromServer = await fetchArticles();
      setArticles(articlesFromServer)
    }

    getArticles();
  }, [articles])


  //Hämta produkter
  const fetchArticles = async () => {
    const response = await fetch('http://localhost:27585/api/Product')
    const data = await response.json()
    return data;
  }


  //Ta bort artikel
  const deleteArticle = async (id) => {
    await fetch(`http://localhost:27585/api/Product/${id}`, {
      method: 'DELETE',
    })

    setArticles(articles.filter((article) => article.ProductId !== id))
  }

  //Lägg till artikel
  const addArticle = async (article) => {
    console.log(article);
    const response = await fetch('http://localhost:27585/api/Product/create', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(article)
    })
    const data = await response.json()

    setArticles([...articles, data])



    // const ProductId = Math.floor(Math.random() * 1000) + 1
    // const newArticle = { ProductId, ...article }
    // setArticles([...articles, newArticle])
  }

  return (
    <div className="container">
      <Header title='Artikelvy' />
      <AddArticle onAdd={addArticle} />
      {articles.length > 0 ? <ArticleList articles={articles} onDelete={deleteArticle} /> : 'Inga artiklar skapade'}
    </div>
  )
}

export default Articles