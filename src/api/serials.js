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
        if(countryFilter !== 'Виберіть опцію')  {
            url = url + `&countries=${countryFilter}`
         }

        if(genresFilter !== 'Виберіть опцію')  {
             url = url + `&genres=${genresFilter}`
        }


        console.log('url', url)



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

export  const getCountriesFilter = (setCountries, Token) => {
    axios.get(api_url + `tv-show-countries/`, {
        withCredentials: true,
        headers: {
            'Accept': 'application/json',
            "Authorization": Token ? Token : token,
        }
    })
        .then(function (response) {
            console.log('res getCountriesFilter/', response)
            const countries =
            setCountries(response.data)
        })
        .catch(function (error) {
            console.log('err',error);

        });
}

export  const getGenresFilter = (setGenres, Token) => {
    axios.get(api_url + `tv-show-genres/`, {
        withCredentials: true,
        headers: {
            'Accept': 'application/json',
            "Authorization": Token ? Token : token,
        }
    })
        .then(function (response) {
            console.log('res getGenresFilter ', response)
            setGenres(response.data)
        })
        .catch(function (error) {
            console.log('err',error);

        });
}




export const getSerialData = (id, setSerialData, Token) => {
    console.log('token', token, id)

    axios.get(api_url + `tv-shows/${id}`, {
        withCredentials: true,
        headers: {
            'Accept': 'application/json',
            "Authorization": Token ? Token : token,
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


export const addToFavourites = (e,serial,setInFavourite) => {
    e.preventDefault()
    axios.post(api_url + `user-favourites/`, {
        tv_show: serial.id,
    },{
        withCredentials: true,
        headers: {
            'Accept': 'application/json',
            "Authorization":  token,
        }
    })
        .then(function (response) {
            console.log('res SerialData addToFavourites', response)
            setInFavourite(true)

        })
        .catch(function (error) {
            console.log('err',error);

        });
}

export const getFavourites = (token, setFavouriteSerials) => {
    axios.get(api_url + `user-favourites/`, {
        withCredentials: true,
        headers: {
            'Accept': 'application/json',
            "Authorization":  token,
        }
    })
        .then(function (response) {
            console.log('res favouriteSerials', response)
            setFavouriteSerials(response.data)
        })
        .catch(function (error) {
            console.log('err',error);

        });
}

export const deleteFavourites = (id) => {
    axios.get(api_url + `user-favourites/`, {
        withCredentials: true,
        headers: {
            'Accept': 'application/json',
            "Authorization":  token,
        }
    })
        .then(function (response) {
            console.log('res SerialData', response)

        })
        .catch(function (error) {
            console.log('err',error);

        });
}
