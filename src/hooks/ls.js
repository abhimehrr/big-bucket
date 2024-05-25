export const setItem = (key, data) => {
    return localStorage.setItem(key, JSON.stringify(data))
}

export const getItem = (key, data) => {
    const d = localStorage.getItem(key)
    if(!d) return []
    return JSON.parse(d)
}

