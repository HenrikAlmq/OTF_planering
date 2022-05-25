import axios from "axios";

const BaseUrl = "http://localhost:27585/api/"

export const getStockLocationsAPI = async() => {
    const { data } = await axios.get(`${BaseUrl}stocklocation`)
    return data;
}


export const getQuantityPerStockAPI = async() => {
    const { data } = await axios.get(`${BaseUrl}ProductStockPosition`)
    return data;
}