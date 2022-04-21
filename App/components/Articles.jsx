import React, { useState } from 'react';

function Articles() {
  const [article, setArticle] = useState({ articlenumber: "", articledescription: "", barcode: "", volume: "", weight: "" });

  const saveLocal = e => {
    e.preventDefault();
    
    console.log(article);
    let getCurrent = localStorage.getItem('Articles');
    getCurrent = getCurrent ? getCurrent.split(',') : [];
    getCurrent.push(article)
    localStorage.setItem(article.articlenumber, JSON.stringify(article));
  }

  return (
    <form onSubmit={saveLocal}>
      <div className="page">
        <label className="field field_v1">
          <input className='field__input' type="articlenumber" name="articlenumber" id="articlenumber" placeholder='ex. abc123' onChange={e => setArticle({ ...article, articlenumber: e.target.value })} value={article.articlenumber} />
          <span className="field__label-wrap">
            <span className="field__label">Artikelnummer</span>
          </span>
        </label>
        <label className="field field_v1">
          <input className='field__input' type="articledescription" name="articledescription" id="articledescription" placeholder='ex. Grön spade' onChange={e => setArticle({ ...article, articledescription: e.target.value })} value={article.articledescription} />
          <span className="field__label-wrap">
            <span className="field__label">Artikelbeskrivning</span>
          </span>
        </label>
        <label className="field field_v1">
          <input className='field__input' type="barcode" name="barcode" id="barcode" placeholder='ex. 73748437463' onChange={e => setArticle({ ...article, barcode: e.target.value })} value={article.barcode} />
          <span className="field__label-wrap">
            <span className="field__label">EAN</span>
          </span>
        </label>
        <label className="field field_v1">
          <input className='field__input' type="volume" name="volume" id="volume" placeholder='ex. 0,5' onChange={e => setArticle({ ...article, volume: e.target.value })} value={article.volume} />
          <span className="field__label-wrap">
            <span className="field__label">Volym</span>
          </span>
        </label>
        <label className="field field_v1">
          <input className='field__input' type="weight" name="weight" id="weight" placeholder='ex. 1' onChange={e => setArticle({ ...article, weight: e.target.value })} value={article.weight} />
          <span className="field__label-wrap">
            <span className="field__label">Vikt(kg)</span>
          </span>
        </label>
        <input type="submit" value="Skapa artikel" />
      </div>
    </form>
  )
}

export default Articles;