import axios from 'axios';
import jwt_decode from 'jwt-decode';

axios.defaults.baseURL = process.env.REACT_APP_SERVER_ENDPOINT;

/** login function */
export async function login({username, password}){
    try{
        const response = await axios.post('http://localhost:8080/auth/login', { username, password },
            {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                transformRequest: [(data) => {
                    return Object.keys(data)
                        .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
                        .join('&');
                }]
            }
        );
        return response.data
    } catch (error){
        return Promise.reject({ error : "login failed...!"})
    }
}


// export async function verifyPassword({ username, password }){
//     // try {
//     //     if(username){
//     //         const { data } = await axios.post(`http://localhost:5001/api/login`, { username, password })
//     //         return Promise.resolve({ data });
//     //     }
//     // } catch (error) {
//     //     return Promise.reject({ error : "Password doesn't Match...!"})
//     // }
// }
