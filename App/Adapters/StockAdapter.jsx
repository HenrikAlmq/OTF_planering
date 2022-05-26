import axios from "axios";

const BaseUrl = "http://localhost:27585/api/"

export const getStockLocationsAPI = async () => {
    try {
        const { data } = await axios.get(`${BaseUrl}stocklocation`)
        return [data, null];
    } catch (error) {
        return [null, error];
    }

}


export const getQuantityPerStockAPI = async () => {
    try {
        const { data } = await axios.get(`${BaseUrl}ProductStockPosition`)
        return [data, null];
    } catch (error) {
        return [null, error];
    }

}