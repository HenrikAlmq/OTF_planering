import axios from "axios";

export const fetchArticlesAxios = async () => {
    const { data } = await axios.get('http://localhost:27585/api/Product')
    return data;
}

export const deleteArticleAPI = async(id) => {
    await axios(`http://localhost:27585/api/Product/${id}`, {
        method: 'DELETE',
      })
}

