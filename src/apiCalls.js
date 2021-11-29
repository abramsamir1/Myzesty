export const restService = async (url, type) => {
    return fetch(url, {
        method: type,
    })
        .then(response => {
            return response.json()
                .then(res => {
                    return res
                })
        })
        .catch(err => {
            console.log('error', err)
            return Promise.reject(err)
        })
}

export default restService