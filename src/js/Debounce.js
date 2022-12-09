export const debounce = (callback, delay) => {
    let id = 0;
    return function (e) {
        if (id) {
            clearTimeout(id)
        }
        id = setTimeout(() => {
            callback(e)
        }, delay)
    }
}