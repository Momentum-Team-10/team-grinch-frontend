export function requestLogin(email, password) {
    return Response(email, password)
}

function Response(email, password) {
    return new Promise((resolve, reject) => {
        if (email && password) {
            resolve({ auth_token: 'f18b8100eb051d06d8c55eb2f59a23f9c0d8949b'})
        }
        reject(new Error('Incorrect Information'))
    })
}