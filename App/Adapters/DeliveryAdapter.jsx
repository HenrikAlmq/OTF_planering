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

export const deleteDeliveryRowAPI = async(id) => {
    await axios(`http://localhost:27585/api/DeliveryRow/${id}`, {
        method: 'DELETE',
      })
}

export const postDeliveryRowUpdateAPI = async(body, deliveryId) => {
     return await axios.put(`${BaseUrl}Delivery/${deliveryId}`, body, {
        headers: {
            'Content-type': 'application/json'
        }
    });
}

export const postAllocateDelivery = async (id) => {
    return await axios.patch(`${BaseUrl}delivery/${id}/allocate`);
}