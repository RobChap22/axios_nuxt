import axios from 'axios'

const apiCLient = axios.create({
    baseURL: `http://localhost:3000`,
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