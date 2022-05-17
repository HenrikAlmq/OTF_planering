import axios from "axios";

const BaseUrl = "http://localhost:27585/api/"

export const getDeliveriesAPI = async() => {
    const { data } = await axios.get('http://localhost:27585/api/Delivery')
    return data;
}

export  const getDeliveryRowsAPI = async(deliveryid) => {
    const { data } = await axios.get(`http://localhost:27585/api/DeliveryRow/${deliveryid}`)
    return data;
}

export  const getDeliveryAPI = async(deliveryid) => {
    const { data } = await axios.get(`http://localhost:27585/api/Delivery/${deliveryid}`)
    return data;
}

export const postDeliveryRow = async(deliveryRow) => {
    axios.post(BaseUrl + "DeliveryRow", deliveryRow, {
        headers: {
            'Content-type': 'application/json'
        }
    })
}