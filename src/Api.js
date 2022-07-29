import axios from 'axios';

const Api = axios.create({
    baseURL: 'http://economia.awesomeapi.com.br/json/last/USD-BRL,CAD-BRL,EUR-BRL,BTC-BRL,BOB-BRL,CHF-BRL'
});

export default Api;