import { FaTimes } from 'react-icons/fa'

const Article = ({ article, onDelete }) => {
  return (
    <div>
        <h3>Artikelnummer: {article.ArticleNumber} <FaTimes style={{color: 'red', cursor: 'pointer'}} onClick={() => onDelete(article.ProductId)}/></h3>
        <p>Artikelbeskrivning: {article.ArticleDescription}</p>
        <p>Streckkod: {article.Barcode}</p>
        <p>Volym: {article.Volume}</p>
        <p>Vikt: {article.Weight}</p>
        <p>I lager: {article.InStock ? 'Ja' : 'Nej'}</p>

    </div>
  )
}

export default Article