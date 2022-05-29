import React from 'react'
import { useState, useEffect } from 'react'
import { getStockPositionsByDeliveryId } from '../../Adapters/StockAdapter'
import { useParams } from 'react-router-dom'
import Header from '../Header'
import HandleDeliveryRows from './HandleDeliveryRows'
import Button from '../Button'
import { postDeliveryRowUpdateAPI } from '../../Adapters/DeliveryAdapter'


const HandleDelivery = () => {
    const [deliveryRows, setDeliveryRows] = useState([]);
    const [error, setError] = useState([]);
    const params = useParams();

    useEffect(() => {
        const getStockPositionByDeliveryIdAPI = async () => {
            const [data, error] = await getStockPositionsByDeliveryId(params.id);
            setDeliveryRows(data);
            setError(error);
        }

        getStockPositionByDeliveryIdAPI();
    }, [])

    const handleOrder = async (body, deliveryId) => {
        const response = await postDeliveryRowUpdateAPI(body, deliveryId)
        
        alert(response.data)
    }


    return (
        <div>
            <Header title={"Plocklista"} />
             <HandleDeliveryRows deliveryRow={deliveryRows} onConfirm={handleOrder} />
        </div>
    )
}

export default HandleDelivery