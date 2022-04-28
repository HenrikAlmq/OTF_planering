
const Article = ({ article }) => {
  return (
    <div>
        <h3>Artikelnummer: {article.ArticleNumber}</h3>
        <p>Artikelbeskrivning: {article.ArticleDescription}</p>
        <p>Streckkod: {article.Barcode}</p>
        <p>Volym: {article.Volume}</p>
        <p>Vikt: {article.Weight}</p>
        <p>I lager: {article.InStock ? 'Ja' : 'Nej'}</p>

    </div>
  )
}

export default Article