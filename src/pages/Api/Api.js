import axios from "axios"






const api = axios.create({
    baseURL: 'https://64c2579deb7fd5d6ebcfa937.mockapi.io/'
})

const Api = {
    getHouses: () => api.get('userTodo'),
    deleteHouse: (id) => api.delete('userTodo/' + id),
    createHouse: (data) => api.post('userTodo', data),
    getHouseById: (id) => api.get('userTodo/' + id),
    replaceComentById: (id, content) => api.put('userTodo/' + id, content)
}

export default Api