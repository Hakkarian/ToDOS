const URL = 'https://6394e86086829c49e82a249b.mockapi.io'
//axios.defaults.baseURL = 'https://6394e86086829c49e82a249b.mockapi.io'
export const createData = (text) => {
    return fetch(`${URL}/toDOS`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(text),
    }).then(r => r.json())
    // localStorage.setItem('key', JSON.stringify(text))
}
export const fetchData = () => {
    return fetch('https://6394e86086829c49e82a249b.mockapi.io/toDOS').then(r => r.json()).catch(() => [])
    // try {
    //     return Promise.resolve(JSON.parse(localStorage.getItem('key')) || [])
    // } catch (error) {
    //     toastr.error("Do not see any of toDOS");
    //     return Promise.reject([])
    // }
}
export const updateData = (id, text) => {
    return fetch(`${URL}/toDOS/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(text),
    }).then(r => r.json())
    // localStorage.setItem('key', JSON.stringify(text))
}
export const deleteData = (id) => {
    return fetch(`${URL}/toDOS/${id}`, {
        method: 'DELETE',
    }).then(r => r.json()).catch(() => [])
    // localStorage.setItem('key', JSON.stringify(text))
}