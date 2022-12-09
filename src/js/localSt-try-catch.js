const setLocalSt = (key = 'key', data) => {
    try {
        const stringedData = JSON.stringify(data);
        localStorage.setItem(key, stringedData)
    } catch (error) {
        console.log(error)
    }
}
const getLocalSt = key => {
    try {
        localStorage === null ? [] : JSON.parse(localStorage.getItem(key))
    } catch (error) {
        console.log(error)
    }
}
const remLocalSt = key => {
    try {
        localStorage.removeItem(key);
    } catch (error) {
        console.log(error)
    }
}

export { setLocalSt, getLocalSt, remLocalSt }