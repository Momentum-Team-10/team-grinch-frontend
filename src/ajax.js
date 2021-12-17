export function requestLogin(email, password) {
    return fakeResponse(email, password)
}

function fakeResponse(email, password) {
    return new Promise((resolve, reject) => {
        if (email && password) {
            resolve({ auth_token: 'faketoken12345678'})
        }
        reject(new Error('Incorrect Information'))
    })
}