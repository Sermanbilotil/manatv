import axios from "axios";
import {api_url} from "../utils/utils";
import Cookies from "js-cookie";


const token = Cookies.get('token');
export const getSerials = (setSerials, Token, sortFilter, genresFilter, countryFilter, channelFilter, yearFilter, titleFilter) => {
    console.log('token', token)

    let url = `tv-shows/?`
    if (sortFilter !== 'Виберіть опцію') {
        url = url + `ordering=${sortFilter}`
    }
    if (yearFilter !== 'Виберіть опцію') {
        url = url + `&year=${yearFilter}`
    }
    if (countryFilter !== 'Виберіть опцію') {
        url = url + `&countries=${countryFilter}`
    }

    if (channelFilter !== 'Виберіть опцію') {
        url = url + `&networks=${channelFilter}`
    }

    if (genresFilter !== 'Виберіть опцію') {
        url = url + `&genres=${genresFilter}`
    }
    if (titleFilter !== '') {
        url = url + `&title=${titleFilter}`
    } else if (titleFilter == undefined) {
        url = url
    }


    console.log('url', titleFilter)


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
            console.log('err', error.response);

        });

}

export const getCountriesFilter = (setCountries, Token) => {
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
            console.log('err', error);

        });
}

export const getGenresFilter = (setGenres, Token) => {
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
            console.log('err', error);

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
            console.log('err', error);

        });

}


export const addToFavourites = (e, serial, setInFavourite, Token, inFavourite,inFavouriteId,setInFavouriteId) => {
    e.preventDefault()

    if(inFavourite) {
        deleteFavourites(e,inFavouriteId, setInFavourite, Token)
        return
    }

    axios.post(api_url + `user-favourites/`, {
        tv_show: serial.id,
    }, {
        withCredentials: true,
        headers: {
            'Accept': 'application/json',
            "Authorization": Token ? Token : token,
        }
    })
        .then(function (response) {
            console.log('res addToFavourites', response)
            setInFavouriteId(response.data.id)
            setInFavourite(true)

        })
        .catch(function (error) {
            console.log('err', error);
            if(error.status === 400 ) {
                deleteFavourites(e,serial.id, setInFavourite, Token)
            }
        });
}

export const getFavourites = (Token, setFavouriteSerials) => {
    axios.get(api_url + `user-favourites/`, {
        withCredentials: true,
        headers: {
            'Accept': 'application/json',
            "Authorization": Token ? Token : token,
        }
    })
        .then(function (response) {
            console.log('res favouriteSerials', response)
            setFavouriteSerials(response.data)
        })
        .catch(function (error) {
            console.log('err', error);

        });
}

export const deleteFavourites = (e, id,setInFavourite, Token, ) => {
    console.log('token', token)
    axios.delete(api_url + `user-favourites/${id}`, {
        withCredentials: true,
        headers: {
            'Accept': 'application/json',
            "Authorization": Token ? Token : token,
        }
    })
        .then(function (response) {
            console.log('res SerialData', response)

            setInFavourite(false)
        })
        .catch(function (error) {
            console.log('err', error);

        });
}
