export const createData = (text) => {
    localStorage.setItem('key', JSON.stringify(text))
}
export const fetchData = () => {
    try {
        return Promise.resolve(JSON.parse(localStorage.getItem('key')) || []);
    }
    catch {
        toastr.error('Error happened!')
        return Promise.reject([]);
    }
    return Promise.resolve()
}
export const updateData = (text) => {
    localStorage.setItem('key', JSON.stringify(text))
}
export const deleteData = (text) => {
    localStorage.setItem('key', JSON.stringify(text))
}