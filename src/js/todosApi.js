import axios from "axios"
// const URL = 'https://6394e86086829c49e82a249b.mockapi.io'
axios.defaults.baseURL = 'https://6394e86086829c49e82a249b.mockapi.io'
export const createData = (text) => {
    return axios.post(`/toDOS`, text).then(({data}) => data)
    // localStorage.setItem('key', JSON.stringify(text))
}
export const fetchData = () => {
    return axios.get(`/toDOS`).then(({data}) => data).catch(() => [])
}
export const updateData = (id, text) => {
    return axios.put(`/toDOS/${id}`, text).then(({data}) => data)
    // localStorage.setItem('key', JSON.stringify(text))
}
export const deleteData = (id) => {
    return axios.delete(`/toDOS/${id}`).then(({data}) => data).catch(() => [])
    // localStorage.setItem('key', JSON.stringify(text))
}