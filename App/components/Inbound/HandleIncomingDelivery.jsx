import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getIncomingDeliveryRowsAPI } from '../../Adapters/IncomingDeliveryAdapter'
import HandleIncomingRows from './HandleIncomingRows'
import axios from 'axios'


const HandleIncomingDelivery = () => {
    const params = useParams();
    const [incomingDeliveryRows, setIncomingDeliveryRows] = useState([]);


    useEffect(() => {
        const getIncomingDeliveryRows = async () => {
            const incomingDeliveryRowsFromServer = await getIncomingDeliveryRowsAPI(params.id);
            setIncomingDeliveryRows(incomingDeliveryRowsFromServer);
        }

        getIncomingDeliveryRows();
    }, [])


    const putIncomingDeliveryRow = (incomingRow) => {
        console.log(incomingRow)
        axios.put(`http://localhost:27585/api/IncomingDeliveryRow/${incomingRow.IncomingDeliveryRowId}`, incomingRow, {
            headers: {
                'Content-type': 'application/json'
            }
        }).then(res => {
            setIncomingDeliveryRows([...incomingDeliveryRows, res.data])
        })
    }

    const postStockPositionLog = (stockPosition) => {
        console.log(stockPosition)
    }


    return (
        <div>
            {incomingDeliveryRows.map(incomingDeliveryRow => (
                <HandleIncomingRows key={incomingDeliveryRow.incomingDeliveryRowId} deliveryRows={incomingDeliveryRow} putDeliveryRow={putIncomingDeliveryRow} postStockPosition={postStockPositionLog} />
            ))}
        </div>
    )
}

export default HandleIncomingDelivery