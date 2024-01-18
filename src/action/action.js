import axios from "axios";


const req = axios.create({
    baseURL: 'http://http://localhost:3001/api/phonebooks',
    timeout:1000,
    headers: { 'X-Custom-Header': 'foobar' }
});

export const loadPhonebooks = ({keyword, sort})