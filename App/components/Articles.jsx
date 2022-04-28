import Header from "./Header"
import { ArticleList } from "./ArticleList"
import { useState } from 'react'

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
  return (
    <div>
      <Header title='Artikelvy' />
      <ArticleList articles={articles} />
    </div>
  )
}

export default Articles