import axios from "axios";

export default class PostService {
    static async getForecast() {
        try {
            const response = await axios.get("https://api.openweathermap.org/data/2.5/forecast?id=498817&units=metric&appid=3641ae729ccdf47aa710c24709726187&lang=ru");
            return response.data;
        } catch (e) {
            console.log(e);
        }
    }
}