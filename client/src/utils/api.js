import axios from "axios";

export default {
    getTwits: async function(stockSymbol) {
        return await axios.get(`/twits`)
    }
}