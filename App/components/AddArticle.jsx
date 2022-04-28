import {useState} from 'react'

const AddArticle = ({ onAdd }) => {
    //Lokalt state
    const [article, setArticle] = useState('')
    const [articleDesc, setArticleDesc] = useState('')
    const [barcode, setBarcode] = useState('')
    const [volume, setVolume] = useState('')
    const [weight, setWeight] = useState('')
    const [instock, setInStock] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()

        if (!article) {
            alert('Artikelnummer är obligatoriskt')
            return
        }

        onAdd({article, articleDesc, barcode, volume, weight, instock})
        setArticle('')
        setArticleDesc('')
        setBarcode('')
        setVolume('')
        setWeight('')
    }

  return (
    <form className='add-form' onSubmit={onSubmit}>
        <div className="form-control">
            <label>Artikelnummer</label>
            <input type="text" placeholder="Artikelnummer" value={article} onChange={(e) => setArticle(e.target.value)}/>
        </div>
        <div className="form-control">
            <label>Artikelbeskrivning</label>
            <input type="text" placeholder="Artikelbeskrivning" value={articleDesc} onChange={(e) => setArticleDesc(e.target.value)}/>
        </div>
        <div className="form-control">
            <label>Streckkod</label>
            <input type="text" placeholder="Streckkod" value={barcode} onChange={(e) => setBarcode(e.target.value)}/>
        </div>
        <div className="form-control">
            <label>Volym</label>
            <input type="text" placeholder="Volym" value={volume} onChange={(e) => setVolume(e.target.value)}/>
        </div>
        <div className="form-control">
            <label>Vikt</label>
            <input type="text" placeholder="Vikt" value={weight} onChange={(e) => setWeight(e.target.value)}/>
        </div>
        <input type="submit" value='Lägg till Artikel'/>
    </form>
  )
}

export default AddArticle