import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getDeliveryAPI } from '../Adapters/ArticleAdapter'

const DeliveryDetails = () => {
    const [deliveryData, setDeliveryData] = useState('');
    const params = useParams(); //Hämtar ID från URL, kan sedan användas till att ex. skicka ett anrop mot backend med det ID:t
    

    useEffect(() => {
        const getDeliveryById = async () => {
            const deliveryDataFromServer = await getDeliveryAPI(params.id)
            setDeliveryData(deliveryDataFromServer);
        }

        getDeliveryById();
    }, [])

    return (
        <div>
            <p>Ordernummer: {deliveryData.orderId}</p>
            <p>Adress: {deliveryData.deliveryAddress}</p>
            <p>Telefonnummer: {deliveryData.phoneNumber}</p>
            <p>Postnummer: {deliveryData.zipCode}</p>
            <p>Email: {deliveryData.email}</p>
        </div>
    )
}

export default DeliveryDetails