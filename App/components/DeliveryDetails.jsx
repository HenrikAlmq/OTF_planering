import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getDeliveryAPI } from '../Adapters/ArticleAdapter'
import { getArticleAPI } from '../Adapters/ArticleAdapter'
import DeliveryDetailRowArticle from './DeliveryDetailRowArticle'
import { ArticleList } from './ArticleList'
import { getDeliveryRowsAPI } from '../Adapters/DeliveryAdapter'

const DeliveryDetails = () => {
    const [deliveryData, setDeliveryData] = useState('');
    const [articles, setArticles] = useState([]);
    const [deliveryRows, setDeliveryRows] = useState('');
    const params = useParams(); //Hämtar ID från URL, kan sedan användas till att ex. skicka ett anrop mot backend med det ID:t

    useEffect(() => {
        const getArticles = async () => {
            const articlesFromServer = await getArticleAPI();
            setArticles(articlesFromServer);
        }

        const getDeliveryById = async () => {
            const deliveryDataFromServer = await getDeliveryAPI(params.id)
            setDeliveryData(deliveryDataFromServer);
        }

        const getDeliveryRowsById = async () => {
            const deliveryRowsFromServer = await getDeliveryRowsAPI(params.id);
            setDeliveryRows(deliveryRowsFromServer)
        }

        getDeliveryRowsById();
        getDeliveryById();
        getArticles();
    }, [])

console.log(deliveryRows);

    return (
        <>
            <div>
                <p>Ordernummer: {deliveryData.orderId}</p>
                <p>Adress: {deliveryData.deliveryAddress}</p>
                <p>Telefonnummer: {deliveryData.phoneNumber}</p>
                <p>Postnummer: {deliveryData.zipCode}</p>
                <p>Email: {deliveryData.email}</p>
            </div>
            <br />
            <div>
                <ArticleList articles={articles} ArticlePage={DeliveryDetailRowArticle} deliveryData={deliveryData} />
            </div>
        </>
    )
}

export default DeliveryDetails