import axios from "axios";
import {api_url} from "../utils/utils";
import Cookies from "js-cookie";


const token = Cookies.get('token');
export const getSerials = (setSerials) => {
    console.log('token', token)

    axios.get(api_url + 'tv-shows/', {
        withCredentials: true,
        headers: {
            'Accept': 'application/json',
            "Authorization": token,
        }
    })
        .then(function (response) {
            console.log('Serials res', response.data)
            setSerials(response.data)

        })
        .catch(function (error) {
            console.log('err',error.response);

        });

}


export const getSerialData = (id, setSerialData) => {
    console.log('token', token, id)

    axios.get(api_url + `tv-shows/${id}`, {
        withCredentials: true,
        headers: {
            'Accept': 'application/json',
            "Authorization": token,
        }
    })
        .then(function (response) {
            console.log('res SerialData', response)
            setSerialData(response.data)
        })
        .catch(function (error) {
            console.log('err',error);

        });

}
