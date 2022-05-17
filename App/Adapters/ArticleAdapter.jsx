import axios from "axios";

const BaseUrl = `http://localhost:27585/api/`

export const getArticleAPI = async () => {
    const { data } = await axios.get(BaseUrl + "product")
    return data;
}

export const deleteArticleAPI = async(id) => {
    await axios(`http://localhost:27585/api/Product/${id}`, {
        method: 'DELETE',
      })
}

export const getDeliveriesAPI = async() => {
    const { data } = await axios.get('http://localhost:27585/api/Delivery')
    return data;
}

export  const getDeliveryRows = async(deliveryid) => {
    const { data } = await axios.get(`http://localhost:27585/api/DeliveryRow/${deliveryid}`)
    return data;
}

export  const getDeliveryAPI = async(deliveryid) => {
    const { data } = await axios.get(`http://localhost:27585/api/Delivery/${deliveryid}`)
    return data;
}


