import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getArticleAPI } from '../../Adapters/ArticleAdapter'
import { getIncomingDeliveryByIdAPI } from '../../Adapters/IncomingDeliveryAdapter'
import { getIncomingDeliveryRowsAPI } from '../../Adapters/IncomingDeliveryAdapter'
import axios from 'axios'
import { ArticleList } from '../ArticleList'
import IncomingDeliveryRowDetail from './IncomingDeliveryRowDetail'
import IncomingDeliveryRowsData from './IncomingDeliveryRowsData'
import { deleteIncomingDeliveryRowAPI } from '../../Adapters/IncomingDeliveryAdapter'
import { Link } from 'react-router-dom'

const IncomingDeliveryDetails = () => {
  const [articles, setArticles] = useState([]);
  const [incomingDeliveryData, setincomingDeliveryData] = useState('');
  const [incomingDeliveryRows, setIncomingDeliveryRows] = useState([]);

  const params = useParams();

  useEffect(() => {
    const getArticles = async () => {
      const articlesFromServer = await getArticleAPI();
      setArticles(articlesFromServer);
    }

    const getincomingDeliveryById = async () => {
      const incomingDeliveryFromServer = await getIncomingDeliveryByIdAPI(params.id);
      setincomingDeliveryData(incomingDeliveryFromServer);
    }

    const getIncomingDeliveryRows = async () => {
      const incomingDeliveryRowsFromServer = await getIncomingDeliveryRowsAPI(params.id);
      setIncomingDeliveryRows(incomingDeliveryRowsFromServer);
    }

    getIncomingDeliveryRows();
    getincomingDeliveryById();
    getArticles();
  }, [])

  const postIncomingDeliveryRows = (incomingDeliveryRow) => {
    axios.post('http://localhost:27585/api/IncomingDeliveryRow/create', incomingDeliveryRow, {
      headers: {
        'Content-type': 'application/json'
      }
    }).then(res => {
        setIncomingDeliveryRows([...incomingDeliveryRows, res.data])
    })
  }

  const deleteIncomingDeliveryRow = (id) => {
    alert("Säker på att du vill ta bort inköpsorderrad?");
    deleteIncomingDeliveryRowAPI(id);
    setIncomingDeliveryRows(incomingDeliveryRows.filter((incomingDeliveryRow) => incomingDeliveryRow.incomingDeliveryRowId !== id));
  } 

  return (
    <>
    <div className='orderInfo'>
        <h2>Orderinfo:</h2>
        <p>Inköpsordernummer: {incomingDeliveryData.purchaseOrderId}</p>
        <p>Adress: {incomingDeliveryData.deliveryAddress}</p>
        <p>Telefonnummer: {incomingDeliveryData.phoneNumber}</p>
        <p>Email: {incomingDeliveryData.email}</p> 
        <br />
    <p><b><Link to={`/inbound/handle/${incomingDeliveryData.incomingDeliveryId}`}>Hantera inleverans</Link></b></p>
    </div>
    <br />
    <div className='orderdata'>
        <div>
            <h2>Lägg till inköps-orderrad:</h2>
            <ArticleList articles={articles} ArticlePage={IncomingDeliveryRowDetail} incomingDeliveryData={incomingDeliveryData} onAdd={postIncomingDeliveryRows} />
        </div>
        <div>
            <h2>Befintliga inköps-orderrader:</h2>
            {incomingDeliveryRows.length > 0 ? <ArticleList articles={incomingDeliveryRows} ArticlePage={IncomingDeliveryRowsData} onDelete={deleteIncomingDeliveryRow} /> : 'Inga inköpsorderrader'}
        </div>
    </div>
    
</>
  )
}

export default IncomingDeliveryDetails