import axios from "axios";

export default class PostService {
    static async getForecast(id) {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast`, {
            params: {
                id: id,
                units: 'metric',
                appid: process.env.REACT_APP_APPID,
                lang: 'ru'
            }
        });
        return response.data;
    }

    static async getWeather(id) {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather`, {
            params: {
                id: id,
                units: 'metric',
                appid: process.env.REACT_APP_APPID,
                lang: 'ru'
            }
        });
        return response.data;
    }
}