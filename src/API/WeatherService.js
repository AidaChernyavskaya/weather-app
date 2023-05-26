import axios from "axios";

export default class PostService {
    static async getForecast(lat,lon) {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast`, {
            params: {
                lat: lat,
                lon: lon,
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

    static async getCoords(name) {
        const response = await axios.get(`https://api.openweathermap.org/geo/1.0/direct?`, {
            params: {
                q: name,
                appid: process.env.REACT_APP_APPID,
                limit: 15,
            }
        });
        return response.data;
    }
}