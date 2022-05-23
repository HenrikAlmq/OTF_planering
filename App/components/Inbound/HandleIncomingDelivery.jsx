import React from 'react'
import { useParams } from 'react-router-dom'
import {useEffect, useState} from 'react'
import { getIncomingDeliveryRowsAPI } from '../../Adapters/IncomingDeliveryAdapter'
import HandleIncomingRows from './HandleIncomingRows'


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



    

  return (
    <div>
        {incomingDeliveryRows.map(incomingDeliveryRow => (
            <HandleIncomingRows key={incomingDeliveryRow.incomingDeliveryRowId} deliveryRows={incomingDeliveryRow} />
        ))}
    </div>
  )
}

export default HandleIncomingDelivery