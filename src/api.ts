import axios from "axios";

export default axios.create({
    baseURL: "", // Vamos definir o endpoint da API futuramente
    headers: {
        "Content-type": "application/json"
    }
});
