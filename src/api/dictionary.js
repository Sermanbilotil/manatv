import axios from "axios";
import Cookies from "js-cookie";
import {api_url} from "../utils/utils";

const token = Cookies.get('token');
export const getDictionary = (setDictionary ) => {
    console.log('token', token)

    axios.get(api_url + 'dictionaries/', {
        withCredentials: true,
        headers: {
            'Accept': 'application/json',
            "Authorization": token,
        }
    })
        .then(function (response) {
            console.log('Dcit res', response.data[0].id)
            setDictionary(response.data)

        })
        .catch(function (error) {
            console.log('err',error.response);

        });

}


export const getDictionaryData = (id, setDictionaryData) => {
    console.log('token', token, id)

    axios.get(api_url + `dictionaries/${id}`, {
        withCredentials: true,
        headers: {
            'Accept': 'application/json',
            "Authorization": token,
        }
    })
        .then(function (response) {
                console.log('res getDictionaryData', response)
            setDictionaryData(response.data)
        })
        .catch(function (error) {
            console.log('err',error);

        });

}

export const editDictionaryWord = (setDictionaryData, id, status) => {
    console.log('token editDictionaryWord', token, id, status)

    axios.patch(api_url + `dictionary-words/${id}/`, {
        status: status,
    },{
        withCredentials: true,
        headers: {
            'Accept': 'application/json',
            "Authorization": token,
        },

    })
        .then(function (response) {
            console.log('res getDictionaryDWord', response)

            getDictionaryData(response.data.dictionary, setDictionaryData)
        })
        .catch(function (error) {
            console.log('err',error);

        });

}


export const deleteDictionaryWord = ( id, setDictionaryData, setShowWordModal) => {


    axios.delete(api_url + `dictionary-words/${id}/`,{
        withCredentials: true,
        headers: {
            'Accept': 'application/json',
            "Authorization": token,
        },

    })
        .then(function (response) {
            console.log('res getDictionaryDWord', response)

            getDictionaryData(1, setDictionaryData, )

            setShowWordModal(false)
        })
        .catch(function (error) {
            console.log('err',error);

        });

}
