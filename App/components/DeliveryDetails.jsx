import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getDeliveryAPI } from '../Adapters/ArticleAdapter'
import { getArticleAPI } from '../Adapters/ArticleAdapter'
import DeliveryDetailArticle from './DeliveryDetailArticle'

const DeliveryDetails = () => {
    const [deliveryData, setDeliveryData] = useState('');
    const [articles, setArticles] = useState([]);
    const params = useParams(); //Hämtar ID från URL, kan sedan användas till att ex. skicka ett anrop mot backend med det ID:t


    useEffect(() => {
        const getDeliveryById = async () => {
            const deliveryDataFromServer = await getDeliveryAPI(params.id)
            setDeliveryData(deliveryDataFromServer);
        }

        const getArticles = async () => {
            const articlesFromServer = await getArticleAPI();
            setArticles(articlesFromServer);
        }

        getDeliveryById();
        getArticles();
    }, [])

    

    return (
        <>
            <div>
                <p>Ordernummer: {deliveryData.orderId}</p>
                <p>Adress: {deliveryData.deliveryAddress}</p>
                <p>Telefonnummer: {deliveryData.phoneNumber}</p>
                <p>Postnummer: {deliveryData.zipCode}</p>
                <p>Email: {deliveryData.email}</p>
            </div>
            <div>
                {articles.map((article, index) => {
                    console.log(article.productId);
                    <DeliveryDetailArticle key={index} value={article} />
                })}
            </div>
            
        </>
    )
}

export default DeliveryDetails