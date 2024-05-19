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
        const { access_token } = response.data;

        if (access_token) {
            console.log("Access Token:", access_token); // Optional: log the token for debugging
            localStorage.setItem('token', access_token); // Store the token in localStorage
            return response.data; // Return the full response data for further processing if needed
        } else {
            throw new Error("Access token not received");
        }
    } catch (error){
        return Promise.reject({ error : "login failed...!"})
    }
}

export async function mealplancreate(formData){

    console.log(formData)
    // Retrieve the token from localStorage
  const token = localStorage.getItem('token');

  console.log(localStorage.getItem('token'))
    // Send the request with the token in the Authorization header
  try {
    const response = await axios.post('http://localhost:8080/api/mealplan/createmealplan', formData, 
    {
      headers: {
        'Authorization': `Bearer ${token}`,
        // 'Content-Type': 'multipart/form-data'
      }
    });
    console.log("Success", response.data);
    // Handle success (e.g., navigate, show message)
    return response.data; // Return data for further processing
  } catch (error) {
    console.error("Error submitting form", error.response ? error.response.data : "Unknown error");
    // Handle error (e.g., show error message)
    throw error;
  }
}


export async function fetchMealPlans(){
    const token = localStorage.getItem("token");

    try{
        const response = await axios.get('http://localhost:8080/api/mealplan/getallmealplans',
            {
                headers:{
                    "Authorization": `Bearer ${token}`
                }
            }
        );
        return response.data;
    } catch (error) {
        console.error("Error fetching mealplans", error.response ? error.response.data: "Unknown error");
        throw error;
    }
}

export async function loadImage(imageId) {
    const token = localStorage.getItem("token");
    try {
        const response = await axios.get(`http://localhost:8080/api/media/filedownload/${imageId}`, {
            responseType: 'blob',
            headers:{
                "Authorization": `Bearer ${token}`
            }
        });
        const url = URL.createObjectURL(response.data);
        return url;
    } catch (error) {
        console.error("Error loading image", error.response ? error.response.data : "Unknown error");
        throw error;
    }
}