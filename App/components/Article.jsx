import { FaTimes } from 'react-icons/fa'

const Article = ({ article, onDelete }) => {
  
  return (
    <div className='form-check'>
        <h3>Artikelnummer: {article.articleNumber} <FaTimes style={{color: 'red', cursor: 'pointer'}} onClick={() => onDelete(article.productId)}/></h3>
        <p>Artikelbeskrivning: {article.articleDescription}</p>
        <p>Streckkod: {article.barcode}</p>
        <p>Volym: {article.volume}</p>
        <p>Vikt: {article.weight}</p>
        <p>I lager: {article.inStock ? 'Ja' : 'Nej'}</p>

    </div>
  )
}

export default Article