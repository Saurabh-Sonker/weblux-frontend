import Axios from 'axios'

const axios = Axios.create();
const BASE_URL = 'http://localhost:5000/user/'

export default {
    login: async (data) => {
        const getUrl = `${BASE_URL}login`;
        return axios.post(getUrl, {
            email: data.email,
            password: data.password
        })
            .then((res) => {
                return res;
            })
            .catch((err) => {
                return err
            })
    },

    register: async (data) => {
        const getUrl = `${BASE_URL}register`;
        return axios.post(getUrl, {
            email: data.email,
            password: data.password,
            username: data.username,
            telegramUsername: data.telegramUsername
        })
            .then((res) => {
                return res;
            })
            .catch((err) => {
                return err
            })
    },
}
