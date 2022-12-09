export const createData = (text) => {
    localStorage.setItem('key', JSON.stringify(text))
}
export const fetchData = () => {
    try {
        return JSON.parse(localStorage.getItem('key')) || [];
    }
    catch {
        console.log('error happened')
        return [];
    }
}
export const updateData = (text) => {
    localStorage.setItem('key', JSON.stringify(text))
}
export const deleteData = (text) => {
    localStorage.setItem('key', JSON.stringify(text))
}