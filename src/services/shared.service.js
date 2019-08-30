import axios from 'axios'

const sercureServer = 'http://localhost:3500'
const headers = {
    'content-type': 'application/json'
}

export const sharedService = {
    signup: (payload) => {
        const url = sercureServer + '/api/signup';
        return axios(url, {
            method: 'POST',
            headers,
            data: payload
        })
            .then(response => response)
            .catch(error => {
                throw error
            });
    },
    login: (payload) => {
        console.log(payload);
        const url = sercureServer + '/api/login';
        return axios(url, {
            method: 'GET',
            headers,
            data: payload
        })
            .then(response => response)
            .catch(error => {
                throw error
            });
    }
}