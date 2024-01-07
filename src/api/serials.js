import axios from "axios";
import {api_url} from "../utils/utils";
import Cookies from "js-cookie";


const token = Cookies.get('token');
export const getSerials = (setSerials, Token, sortFilter, genresFilter, countryFilter, channelFilter, yearFilter, titleFilter) => {
    console.log('token', sortFilter)

    let url = `tv-shows/?`

    const addFilterToUrl = (filterName, filterValue) => {
        if (filterValue && (filterValue !== 'Choose Option' && filterValue !== 'Выберите опцию')) {
            url += `&${filterName}=${filterValue}`;
        }
    };

    addFilterToUrl('ordering', sortFilter);
    addFilterToUrl('year', yearFilter);
    addFilterToUrl('countries', countryFilter);
    addFilterToUrl('networks', channelFilter);
    addFilterToUrl('genres', genresFilter);
    addFilterToUrl('title', titleFilter);

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
            setSerialData(response.data)
        })
        .catch(function (error) {
            console.log('err', error);

        });

}


export const addToFavourites = (e, serial, setInFavourite, Token, inFavourite, inFavouriteId, setInFavouriteId) => {
    e.preventDefault()

    if (inFavourite) {
        deleteFavourites(e, inFavouriteId, setInFavourite, Token)
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
            setInFavouriteId(response.data.id)
            setInFavourite(true)

        })
        .catch(function (error) {
            console.log('err', error);
            if (error.status === 400) {
                deleteFavourites(e, serial.id, setInFavourite, Token)
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
            setFavouriteSerials(response.data)
        })
        .catch(function (error) {
            console.log('err', error);

        });
}

export const getWatched = (Token, setWatchedSerials) => {
    axios.get(api_url + `user-watching/`, {
        withCredentials: true,
        headers: {
            'Accept': 'application/json',
            "Authorization": Token ? Token : token,
        }
    })
        .then(function (response) {
            setWatchedSerials(response.data)
        })
        .catch(function (error) {
            console.log('err', error);

        });
}

export const addToWatched = (id, Token,) => {

    axios.post(api_url + `user-watching/`, {
        tv_show: id,
    }, {
        withCredentials: true,
        headers: {
            'Accept': 'application/json',
            "Authorization": Token ? Token : token,
        }
    })
        .then(function (response) {
                console.log('addToWatched res', response)
        })
        .catch(function (error) {
            console.log('err addToWatched', error);

        });
}



export const deleteFavourites = (e, id, setInFavourite, Token,) => {
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
