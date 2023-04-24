import axios from "axios";

export default class PostService {
    static async getForecast() {
        try {
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?id=498817&units=metric&appid=${process.env.REACT_APP_APPID}&lang=ru`);
            return response.data;
        } catch (e) {
            console.log(e);
        }
    }
}