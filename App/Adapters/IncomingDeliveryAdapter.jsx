import axios from "axios";

const BaseUrl = "http://localhost:27585/api/"

export const getIncomingDeliveriesAPI = async() => {
    const { data } = await axios.get('http://localhost:27585/api/IncomingDelivery')
    return data;
}

export const getIncomingDeliveryByIdAPI = async(incomingDeliveryId) => {
    const { data } = await axios.get(`http://localhost:27585/api/IncomingDelivery/${incomingDeliveryId}`)
    return data;
}

export const getIncomingDeliveryRowsAPI = async(incomingDeliveryId) => {
    const { data } = await axios.get(`http://localhost:27585/api/IncomingDeliveryRow/${incomingDeliveryId}`)
    return data;
}

export const deleteIncomingDeliveryRowAPI = async(id) => {
    await axios(`${BaseUrl}IncomingDeliveryRow/${id}`, {
        method: 'DELETE',
      })
}