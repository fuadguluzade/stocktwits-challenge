import axios from "axios";

export default {
    getTwits: async function(stockSymbol) {
        return await axios.get(`https://api.stocktwits.com/api/2/streams/symbol/${stockSymbol}.json`)
    }
}