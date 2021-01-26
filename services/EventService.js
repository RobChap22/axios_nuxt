import axios from 'axios'

const apiCLient = axios.create({
    baseURL: `http://my-json-server.typicode.com/Code-Pop/real-world-nuxt/`,
    withCredentials: false,
    headers: {
        Accept: 'application.json',
        'Content-Type': 'application/json'
    }
})

export default {
    getEvents() {
        return apiCLient.get('/events')
    },
    getEvent(id) {
        return apiCLient.get('/events/' + id)
    }
}