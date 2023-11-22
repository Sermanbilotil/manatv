import axios from "axios";
import {api_url} from "../utils/utils";
import Cookies from "js-cookie";


const token = Cookies.get('token');
export const getSerials = (setSerials, Token, sortFilter,genresFilter,countryFilter,channelFilter,yearFilter) => {
    console.log('token', token)

        let url = `tv-shows/?`
        if(sortFilter !== 'Виберіть опцію') {
            url = url + `ordering=${sortFilter}`
        }
        if(yearFilter !== 'Виберіть опцію') {
            url = url + `&year=${yearFilter}`
        }



    axios.get(api_url + url, {
        withCredentials: true,
        headers: {
            'Accept': 'application/json',
            "Authorization": Token ? Token : token,
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
