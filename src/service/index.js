import axios from "axios";

const { REACT_APP_API_URI } = process.env;
export function getStores(){
    return new Promise(resolve => {

        axios.get(`${REACT_APP_API_URI}/home/store/popular`).then(res => res.status === 200 && res.data).then(resolve).catch(console.error)
    })
}

export function sendCotation(body){
    return new Promise(resolve =>{
        axios.post(`${REACT_APP_API_URI}/home/contact/cotation/`,body).then(res => res.status === 200 && res.data).then(resolve).catch(console.error)
    })
}