import axios from "axios";
import {api_url, ValidateEmail} from "../utils/utils";
import Cookies from "js-cookie";


const token = Cookies.get('token');
export const ChangePassword = (e, password, newPassword, confirmNewPassword, setPasswordError, setPassword, setNewPassword, setConfirmNewPassword, setNewPasswordError) => {
    e.preventDefault()

    if (newPassword === confirmNewPassword) {
        axios.post(api_url + 'users/change_password/', {
            old_password: password,
            new_password: newPassword,
        }, {
            withCredentials: true,
            headers: {
                'Accept': 'application/json',
                "Authorization": token,
            }
        })
            .then(function (response) {
                console.log('change pass res', response)
                if (response.data.detail) {
                    setPasswordError(response.data.detail)
                    setPassword('')
                    setNewPassword('')
                    setConfirmNewPassword('')
                }
            })
            .catch(function (error) {
                console.log('err', error.response.data);
                if (error.response.data.detail) {
                    setPasswordError(error.response.data.detail)
                }
                if (error.response.data.new_password) {

                    setNewPasswordError(error.response.data.new_password[0])
                }
                if (error.response.data.old_password) {
                    setPasswordError(error.response.data.old_password[0])
                }

            });
    } else {

        setNewPasswordError('Passwords do not match.')


    }
}


export const handleUploadImage = (e, remove,inputFile,userData,uploadedImage,previewImage,setUserData,setEmailError) => {
    e.preventDefault()
    if (remove) {
        inputFile.current.value = ''
    }
    const userId = userData.id

    const formData = new FormData();
    formData.append('photo', remove ? '' : uploadedImage);
    console.log('for', previewImage)
    axios.patch(api_url + `users/${userId}/`, formData, {
        withCredentials: true,
        headers: {
            'Content-Type': 'multipart/form-data',
            'Accept': 'application/json',
            "Authorization": token,
        }
    })
        .then(function (response) {
            console.log('handleUploadImage res', response)
            localStorage.setItem('userData', JSON.stringify(response.data))

            setUserData(response.data)

            if (response.data.detail) {
                setEmailError(response.data.detail)
            }
        })
        .catch(function (error) {
            console.log('err', error.response.data);
            if (error.response.data.detail) {
                setEmailError(error.response.data.detail)
            }
        });
}

export const UpdateUserData = (e,userData,userName,langLevel,userLang,subtitleLang,setUserData,setDataSavedText,setEmailError) => {
    e.preventDefault()

    if (true) {
        axios.put(api_url + `users/${userData.id}/`, {
            name: userName,
            language_level: langLevel,
            interface_language: userLang,
            subtitle_translation_language: subtitleLang,
        }, {
            withCredentials: true,
            headers: {
                'Accept': 'application/json',
                "Authorization": token,
            }
        })
            .then(function (response) {
                console.log('UpdateUserData', response.data)
                if (response.status === 200) {
                    setUserData(response.data)
                    setDataSavedText('User data has been successfully updated')
                }
                if (response.data.detail) {
                    setEmailError(response.data.detail)
                }
            })
            .catch(function (error) {
                console.log('err', error.response.data);
                if (error.response.data.detail) {
                    setEmailError(error.response.data.detail)
                }
            });
    } else {
        setEmailError('Email not valid')
    }
}

// export const ChangeEmail = (e) => {
//     e.preventDefault()
//
//     if (ValidateEmail(email)) {
//         axios.post(api_url + `users/change_email/`, {
//             new_email: email,
//         }, {
//             withCredentials: true,
//             headers: {
//                 'Accept': 'application/json',
//                 "Authorization": "Token " + token,
//             }
//         })
//             .then(function (response) {
//                 console.log('change email res', response)
//                 if (response.data.detail) {
//                     setEmailError(response.data.detail)
//                 }
//             })
//             .catch(function (error) {
//                 console.log('err change email', error.response.data);
//                 if (error.response.data.detail) {
//                     setEmailError(error.response.data.detail)
//                 }
//             });
//     } else {
//         setEmailError('Email not valid')
//     }
// }
