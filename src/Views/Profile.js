
import filmIcon from '../img/film-icon.png'

import {useEffect, useRef, useState} from "react";
import axios from "axios";
import {api_url, ValidateEmail} from "../utils/utils";
import Cookies from "js-cookie";
import Modal from 'react-modal';


const Profile = ({userData,setUserData}) => {
    const token = Cookies.get('token');

    const [userName, setUserName] = useState('')
    const [userLang, setUserLang] = useState('Виберіть опцію')
    const [userLangOpened, setUserLangOpened] = useState('')
    const [subtitleLangOpened, setSubtitleLangOpened] = useState('')
    const [subtitleLang, setSubtitleLang] = useState('Виберіть опцію')
    const [langLevel, setLangLevel] = useState('Виберіть опцію')
    const [langLevelOpened, setLangLevelOpened] = useState('')
    const [email, setEmail] = useState('')
    const [emailError, setEmailError] = useState('')


    const [password, setPassword] = useState('')
    const [passwordError, setPasswordError] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [newPasswordError, setNewPasswordError] = useState('')
    const [confirmNewPassword, setConfirmNewPassword] = useState('')

    const [previewImage, setPreviewImage] = useState(null);
    const [uploadedImage, setUploadedImage] = useState('');

    const [dataSavedText, setDataSavedText] = useState('');


    useEffect(() => {
        if(Object.keys(userData).length > 0 ) {
            setEmail(userData.email)
            setUserName(userData.name)
            if(userData?.interface_language !== null) {
                setUserLang(userData?.interface_language)
            }
            if(userData?.language_level  !== null) {
                setLangLevel(userData?.language_level)
            }
            if(userData?.subtitle_translation_language !== null) {
                setSubtitleLang(userData?.subtitle_translation_language)
            }


        }
        console.log('ud', userData)

    }, [userData]);


    const ChangePassword = (e) => {
        e.preventDefault()

       if(newPassword === confirmNewPassword) {
           axios.post(api_url + 'users/change_password/', {
               old_password: password,
               new_password: newPassword,
           },{
               withCredentials: true,
               headers: {
                   'Accept': 'application/json',
                   "Authorization": "Token " + token,
               }
           })
               .then(function (response) {
                   console.log('change pass res', response)
                   if(response.data.detail) {
                       setPasswordError(response.data.detail)
                       setPassword('')
                       setNewPassword('')
                       setConfirmNewPassword('')
                   }
               })
               .catch(function (error) {
                   console.log('err',error.response.data);
                  if(error.response.data.detail) {
                      setPasswordError(error.response.data.detail)
                  }
                  if(error.response.data.new_password ) {

                      setNewPasswordError(error.response.data.new_password[0] )
                  }
                  if(error.response.data.old_password) {
                      setPasswordError(error.response.data.old_password[0])
                  }

               });
       } else {

                setNewPasswordError('Passwords do not match.')


       }
    }

    const ChangeEmail = (e) => {
        e.preventDefault()

        if(ValidateEmail(email)) {
            axios.post(api_url + `users/change_email/`, {
                new_email: email,
            },{
                withCredentials: true,
                headers: {
                    'Accept': 'application/json',
                    "Authorization": "Token " + token,
                }
            })
                .then(function (response) {
                    console.log('change email res', response)
                    if(response.data.detail) {
                        setEmailError(response.data.detail)
                    }
                })
                .catch(function (error) {
                    console.log('err change email',error.response.data);
                    if(error.response.data.detail) {
                            setEmailError(error.response.data.detail)
                    }
                });
        } else {
                setEmailError('Email not valid')
        }
    }

    const handleUploadImage = (e) => {
        e.preventDefault()
        const userId = userData.id

        const formData = new FormData();
        formData.append('photo', uploadedImage);


        axios.patch(api_url + `users/${userId}/`, formData,{
            withCredentials: true,
            headers: {
                'Content-Type':  'multipart/form-data',
                'Accept': 'application/json',
                "Authorization": "Token " + token,
            }
        })
            .then(function (response) {
                console.log('handleUploadImage res', response)
                localStorage.setItem('userData', JSON.stringify(response.data))

                setUserData(response.data)

                if(response.data.detail) {
                    setEmailError(response.data.detail)
                }
            })
            .catch(function (error) {
                console.log('err',error.response.data);
                if(error.response.data.detail) {
                    setEmailError(error.response.data.detail)
                }
            });
    }

    const UpdateUserData = (e) => {
        e.preventDefault()

        if(true) {
            axios.put(api_url + `users/${userData.id}/`, {
                name: userName,
                language_level: langLevel,
                interface_language: userLang,
                subtitle_translation_language: subtitleLang,
            },{
                withCredentials: true,
                headers: {
                    'Accept': 'application/json',
                    "Authorization": "Token " + token,
                }
            })
                .then(function (response) {
                    console.log('UpdateUserData', response)
                    if(response.status === 200) {
                        setDataSavedText('User data has been successfully updated')
                    }
                    if(response.data.detail) {
                        setEmailError(response.data.detail)
                    }
                })
                .catch(function (error) {
                    console.log('err',error.response.data);
                    if(error.response.data.detail) {
                        setEmailError(error.response.data.detail)
                    }
                });
        } else {
            setEmailError('Email not valid')
        }
    }

    const inputFile = useRef(null)
    const getImage = (e) => {


        const file = e.target.files[0];
        setUploadedImage(file)
        const fileReader = new FileReader();
        console.log('file',file)
        fileReader.addEventListener("load", () => {
            setPreviewImage(fileReader.result);
        });
        fileReader.readAsDataURL(file);
    }


    useEffect(() => {
        if(newPassword === confirmNewPassword) {
            setNewPasswordError(' ')
        }

    }, [setNewPasswordError, newPassword, confirmNewPassword]);

    useEffect(() => {
        if(passwordError.length > 0) {
            setTimeout(() => {
                setPasswordError('')
                setNewPasswordError('')
            }, 3000)
        }
        if(dataSavedText.length > 0) {
            setTimeout(() => {
                setDataSavedText('')
            }, 3000)
        }

    }, [passwordError, dataSavedText]);



    return <main>

        <header className="common-header">
            <div className="container">
                <ul className="common-header__list">
                    <li className="common-header__item">
                        <a href="subscription.html" className="common-header__link">
                            <svg className="common-header__icon" xmlns="http://www.w3.org/2000/svg" fill="none"
                                 viewBox="0 0 24 25">
                                <path fill="#111"
                                      d="M21.262 10.111a1.312 1.312 0 0 0 1.05-1.285V6.5A1.313 1.313 0 0 0 21 5.187H3A1.313 1.313 0 0 0 1.687 6.5v2.326a1.313 1.313 0 0 0 1.051 1.285 2.438 2.438 0 0 1 0 4.781 1.313 1.313 0 0 0-1.05 1.282V18.5A1.313 1.313 0 0 0 3 19.813h18a1.313 1.313 0 0 0 1.313-1.313v-2.326a1.313 1.313 0 0 0-1.051-1.285 2.438 2.438 0 0 1 0-4.781v.003ZM2.812 18.5v-2.326a.187.187 0 0 1 .15-.183 3.563 3.563 0 0 0 0-6.982.188.188 0 0 1-.15-.188V6.5A.187.187 0 0 1 3 6.312h5.438v12.375H3a.188.188 0 0 1-.188-.187Zm18.226-2.509a.187.187 0 0 1 .15.183V18.5a.188.188 0 0 1-.188.188H9.562V6.313H21a.188.188 0 0 1 .188.187v2.326a.188.188 0 0 1-.15.187 3.563 3.563 0 0 0 0 6.983v-.005Z"/>
                            </svg>
                            <span className="common-header__name">Subscription</span>
                        </a>
                    </li>
                    <li className="common-header__item">
                        <a href="dictionary.html" className="common-header__link">
                            <svg className="common-header__icon" xmlns="http://www.w3.org/2000/svg" fill="none"
                                 viewBox="0 0 24 25">
                                <path fill="#111"
                                      d="M19.5 2.938H6.75A2.813 2.813 0 0 0 3.937 5.75V21.5a.562.562 0 0 0 .563.563H18a.562.562 0 1 0 0-1.125H5.062v-.188a1.687 1.687 0 0 1 1.688-1.688H19.5a.562.562 0 0 0 .563-.562v-15a.563.563 0 0 0-.563-.563Zm-8.438 1.124h4.876v7.313L13.837 9.8a.563.563 0 0 0-.675 0l-2.1 1.575V4.062Zm7.876 13.875H6.75a2.8 2.8 0 0 0-1.688.563V5.75A1.687 1.687 0 0 1 6.75 4.062h3.188V12.5a.562.562 0 0 0 .9.45l2.662-1.997 2.663 1.997a.563.563 0 0 0 .9-.45V4.062h1.875v13.875Z"/>
                            </svg>
                            <span className="common-header__name">Dictionary</span>
                        </a>
                    </li>
                    <li className="common-header__item">
                        <a href="notifications.html" className="common-header__link">
                            <svg className="common-header__icon" xmlns="http://www.w3.org/2000/svg" fill="none"
                                 viewBox="0 0 24 25">
                                <path fill="#111"
                                      d="M20.632 17.088c-.531-.913-1.32-3.488-1.32-6.838a7.312 7.312 0 1 0-14.625 0c0 3.35-.789 5.925-1.32 6.838A1.313 1.313 0 0 0 4.5 19.062h3.982a3.563 3.563 0 0 0 7.032 0H19.5a1.313 1.313 0 0 0 1.13-1.974h.002ZM12 20.938a2.438 2.438 0 0 1-2.37-1.875h4.74A2.438 2.438 0 0 1 12 20.938Zm7.66-3.094a.178.178 0 0 1-.16.093h-15a.177.177 0 0 1-.16-.093.188.188 0 0 1 0-.188c.71-1.218 1.472-4.06 1.472-7.406a6.187 6.187 0 0 1 12.375 0c0 3.345.764 6.183 1.473 7.406a.188.188 0 0 1 0 .188Z"/>
                            </svg>
                            <span className="common-header__name">Notifications</span>
                        </a>
                    </li>
                    <li className="common-header__item">
                        <a href="settings.html" className="common-header__link active">
                            <svg className="common-header__icon" xmlns="http://www.w3.org/2000/svg" fill="none"
                                 viewBox="0 0 24 25">
                                <path fill="#111"
                                      d="M12 8.188a4.313 4.313 0 1 0 0 8.625 4.313 4.313 0 0 0 0-8.625Zm0 7.5a3.187 3.187 0 1 1 0-6.375 3.187 3.187 0 0 1 0 6.374Zm8.063-2.922a8.441 8.441 0 0 0 0-.532l1.437-1.796a.562.562 0 0 0 .104-.496 9.877 9.877 0 0 0-1.002-2.42.563.563 0 0 0-.424-.281l-2.292-.254a7.553 7.553 0 0 0-.375-.375l-.255-2.294a.561.561 0 0 0-.282-.424 9.904 9.904 0 0 0-2.416-1 .562.562 0 0 0-.495.107l-1.8 1.441a8.411 8.411 0 0 0-.533 0L9.938 3a.562.562 0 0 0-.496-.104 9.876 9.876 0 0 0-2.42 1.002.562.562 0 0 0-.281.424l-.25 2.292c-.13.122-.255.247-.376.375l-2.294.261a.562.562 0 0 0-.424.281 9.905 9.905 0 0 0-1 2.416.563.563 0 0 0 .104.49l1.441 1.8a8.411 8.411 0 0 0 0 .533L2.5 14.567a.562.562 0 0 0-.104.496 9.876 9.876 0 0 0 1.002 2.415.563.563 0 0 0 .424.281l2.292.254c.122.13.247.255.375.375l.261 2.29a.562.562 0 0 0 .281.425c.758.439 1.57.775 2.416 1a.562.562 0 0 0 .496-.104l1.79-1.436c.178.005.356.005.533 0l1.801 1.441a.563.563 0 0 0 .496.104 9.872 9.872 0 0 0 2.415-1 .563.563 0 0 0 .281-.425l.254-2.293c.13-.12.255-.245.375-.375l2.294-.255a.563.563 0 0 0 .424-.28 9.892 9.892 0 0 0 1-2.417.561.561 0 0 0-.104-.496l-1.44-1.8Zm-.291 3.903-2.216.247a.563.563 0 0 0-.358.187 7.027 7.027 0 0 1-.592.592.563.563 0 0 0-.188.358l-.246 2.215a8.838 8.838 0 0 1-1.628.67l-1.74-1.394a.562.562 0 0 0-.352-.122h-.034a7.335 7.335 0 0 1-.836 0 .562.562 0 0 0-.385.121l-1.74 1.395a8.824 8.824 0 0 1-1.626-.673l-.247-2.214a.562.562 0 0 0-.187-.358 7.035 7.035 0 0 1-.592-.592.563.563 0 0 0-.358-.187l-2.215-.247a8.84 8.84 0 0 1-.67-1.623l1.394-1.74a.563.563 0 0 0 .122-.386 7.317 7.317 0 0 1 0-.836.563.563 0 0 0-.122-.385l-1.393-1.74c.169-.563.394-1.108.672-1.626l2.214-.247a.562.562 0 0 0 .358-.187c.185-.209.383-.406.592-.592a.563.563 0 0 0 .187-.358l.247-2.215a8.839 8.839 0 0 1 1.623-.67l1.74 1.394c.11.087.247.13.386.121.278-.015.558-.015.836 0a.563.563 0 0 0 .385-.121l1.74-1.394c.563.17 1.108.395 1.626.673l.247 2.216a.563.563 0 0 0 .187.358c.209.185.406.383.592.592.092.104.22.171.358.187l2.215.247c.276.516.5 1.06.67 1.62l-1.394 1.742a.562.562 0 0 0-.122.385c.016.278.016.558 0 .836a.562.562 0 0 0 .122.385l1.393 1.74a8.826 8.826 0 0 1-.67 1.626h.005Z"/>
                            </svg>
                            <span className="common-header__name">Settings</span>
                        </a>
                    </li>
                </ul>
            </div>
        </header>
        <section className="settings">
            <div className="container">
                <div className="settings-block">
                    <p className="settings-block__title">
                        Change email
                    </p>
                    <form action className="settings-block__form settings-block-form">
                        <div className="settings-block-form__row">
                            <label className="settings-block__label settings-block__label--large">
                                You will have to confirm your email
                                <input  type="email" value={email} placeholder="fagozit@gmail.com"/>
                                {/*{emailError.length > 0 && <p className={'red_text'}>{emailError}</p>}*/}
                            </label>
                            {/*<button onClick={(e) => ChangeEmail(e)} className="btn btn--transparent settings-block__btn settings-block__btn--small">*/}
                            {/*    Save*/}
                            {/*</button>*/}
                        </div>
                    </form>
                </div>
                <div className="settings-block">
                    <p className="settings-block__title">
                        Change password
                    </p>
                    <form action className="settings-block__form settings-block-form">
                        <div className="settings-block-form__row">
                            <label className="settings-block__label">
                                Current password
                                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Write current password"/>
                                {passwordError.length > 0 && <p className={passwordError == 'Password changed successfully.' ? 'green_text' : 'red_text'}>{passwordError}</p>}
                            </label>
                            <label className="settings-block__label">
                                Password
                                <input value={newPassword} onChange={(e) => setNewPassword(e.target.value)} type="password" placeholder="Write password"/>
                                {newPasswordError.length > 0 && <p className={'red_text'}>{newPasswordError}</p>}
                            </label>
                        </div>
                        <div className="settings-block-form__row">
                            <label className="settings-block__label">
                                Password confirmation
                                <input value={confirmNewPassword} onChange={(e) => setConfirmNewPassword(e.target.value)} type="password" placeholder="Write password confirmation"/>
                                {newPasswordError.length > 0 && <p className={'red_text'}>{newPasswordError}</p>}
                            </label>
                            <button onClick={(e) => ChangePassword(e)} className="btn btn--transparent settings-block__btn settings-block__btn--big">
                                Save
                            </button>
                        </div>
                    </form>
                </div>
                <div className="settings-block">
                    <p className="settings-block__title">
                        Personal settings
                    </p>
                    <form action className="settings-block__form settings-block-form">
                        <div className="settings-block-form__row">
                            <label className="settings-block__label">
                                Displayed name
                                <input type="text" defaultValue="Andrew" value={userName} onChange={(e) => setUserName(e.target.value)}/>
                            </label>
                            <div className="label settings-block__label settings-thumbnail">
                                Thumbnail photo
                                <div className="settings-thumbnail__row">
                                    <div  onClick={(e) => inputFile.current.click()} className="settings-thumbnail__picture">
                                        <img src={previewImage !== null ? previewImage : userData.photo ? userData.photo :  filmIcon} alt="name" className="settings-thumbnail__img"/>
                                    </div>

                                    <button onClick={(e) => handleUploadImage(e) }  className="settings-thumbnail__btn">Upload</button>
                                    <button onClick={(e) => {
                                        e.preventDefault()
                                        setPreviewImage(null)
                                        setUploadedImage(null)
                                        handleUploadImage()
                                    } } className="settings-thumbnail__remove">Remove</button>
                                    <input type="file" onChange={(e) => getImage(e)}  ref={inputFile}  id="myInput" style={{display: 'none'}}/>
                                </div>
                            </div>
                        </div>
                        <div className="settings-block-form__row">
                            <label className="settings-block__label">
                                Language level

                                <div onClick={() => setLangLevelOpened(!langLevelOpened)} className="custom-select">
                                    <div className={langLevelOpened ? 'select-header opened' : 'select-header'}><span
                                        className="selected-option">{langLevel && langLevel.length > 0 ? langLevel : 'Виберіть опцію'}</span><i className="arrow-icon"></i>
                                    </div>
                                    <ul className={langLevelOpened ? 'options-list opened' : 'options-list'}>
                                        <li   onClick={() => setLangLevel('beginner')}>beginner</li>
                                        <li   onClick={() => setLangLevel('intermediate')}>intermediate</li>
                                        <li   onClick={() => setLangLevel('advanced')}>advanced</li>
                                    </ul>
                                </div>
                            </label>
                            <button  onClick={(e) =>UpdateUserData(e) } className="btn btn--transparent settings-block__btn settings-block__btn--big">
                                Save
                            </button>
                        </div>
                        {dataSavedText && dataSavedText.length > 0 && <p className={'green_text'}>{dataSavedText}</p>}
                    </form>
                </div>
                <div className="settings-block">
                    <p className="settings-block__title">
                        Language and subtitles
                    </p>
                    <form action className="settings-block__form settings-block-form">
                        <div className="settings-block-form__row">
                            <label className="settings-block__label">
                                User interface language

                                <div onClick={() => setUserLangOpened(!userLangOpened)} className="custom-select">
                                    <div className={userLangOpened ? 'select-header opened' : 'select-header'}><span
                                        className="selected-option">{userLang && userLang.length > 0 ? userLang : 'Виберіть опцію'}</span><i className="arrow-icon"></i>
                                    </div>
                                    <ul className={userLangOpened ? 'options-list opened' : 'options-list'}>
                                        <li   onClick={() => setUserLang('en')}>en</li>
                                        <li   onClick={() => setUserLang('ru')}>ru</li>
                                    </ul>
                                </div>
                            </label>
                            <label className="settings-block__label">
                                Subtitle translation language
                                <div onClick={() => setSubtitleLangOpened(!subtitleLangOpened)} className="custom-select">
                                    <div className={subtitleLangOpened ? "select-header opened" : 'select-header'}><span className="selected-option">
                                        {subtitleLang && subtitleLang.length > 0 ? subtitleLang : 'Виберіть опцію'}
                                    </span><i
                                        className="arrow-icon"></i></div>
                                    <ul className={subtitleLangOpened ? 'options-list opened' : 'options-list'}>
                                        <li  onClick={() => setSubtitleLang('en')}>en</li>
                                        <li  onClick={() => setSubtitleLang('ru')}>ru</li>
                                    </ul>
                                </div>
                            </label>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    </main>
}

export default Profile
