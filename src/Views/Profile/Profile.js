import filmIcon from '../../img/film-icon.png'

import {useEffect, useRef, useState} from "react";
import axios from "axios";
import {api_url, ValidateEmail} from "../../utils/utils";
import Cookies from "js-cookie";
import Modal from 'react-modal';
import SubHeader from "../../components/SubHeader";
import {useTranslation} from "react-i18next";
import {ChangePassword, handleUploadImage, UpdateUserData} from "../../api/profile";


const Profile = ({userData, setUserData}) => {
    const token = Cookies.get('token');
    const { t } = useTranslation();

    const [userName, setUserName] = useState('')
    const [userLang, setUserLang] = useState('Select option')
    const [userLangOpened, setUserLangOpened] = useState('')
    const [subtitleLangOpened, setSubtitleLangOpened] = useState('')
    const [subtitleLang, setSubtitleLang] = useState('Select option')
    const [langLevel, setLangLevel] = useState('Select option')
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
        if (Object.keys(userData).length > 0) {
            setEmail(userData.email)
            setUserName(userData.name)
            console.log(userData)
            if (userData?.interface_language !== null) {
                setUserLang(userData?.interface_language)
            }
            if (userData?.language_level !== null) {
                setLangLevel(userData?.language_level)
            }
            if (userData?.subtitle_translation_language !== null) {
                setSubtitleLang(userData?.subtitle_translation_language)
            }


        }
        console.log('ud', userData)

    }, [userData]);



    const inputFile = useRef(null)
    const getImage = (e) => {

        const file = e.target.files[0];
        setUploadedImage(file)
        const fileReader = new FileReader();
        console.log('file', file)
        fileReader.addEventListener("load", () => {
            setPreviewImage(fileReader.result);
        });
        fileReader.readAsDataURL(file);
    }


    useEffect(() => {
        if (newPassword === confirmNewPassword) {
            setNewPasswordError(' ')
        }

    }, [setNewPasswordError, newPassword, confirmNewPassword]);

    useEffect(() => {
        if (passwordError.length > 0) {
            setTimeout(() => {
                setPasswordError('')
                setNewPasswordError('')
            }, 3000)
        }
        if (dataSavedText.length > 0) {
            setTimeout(() => {
                setDataSavedText('')
            }, 3000)
        }

    }, [passwordError, dataSavedText]);


    return <>

        <SubHeader />

    <section className="settings">
        <div className="container">
            <div className="settings-block">
                <p className="settings-block__title">
                    {t('setting.email_title')}
                </p>
                <form action className="settings-block__form settings-block-form">
                    <div className="settings-block-form__row">
                        <label className="settings-block__label settings-block__label--large">
                            {t('setting.email_desc')}
                            <input type="email" value={email} placeholder={t('setting.email_place')}/>
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
                    {t('setting.pass_title')}
                </p>
                <form action className="settings-block__form settings-block-form">
                    <div className="settings-block-form__row">

                        <label className="settings-block__label">
                            {t('setting.new_pass')}
                            <input value={newPassword} onChange={(e) => setNewPassword(e.target.value)} type="password"
                                   placeholder= {t('setting.new_pass_placeholder')}/>
                            {newPasswordError.length > 0 && <p className={'red_text'}>{newPasswordError}</p>}
                        </label>
                        <label className="settings-block__label">
                            {t('setting.confirm_pass')}
                            <input value={confirmNewPassword} onChange={(e) => setConfirmNewPassword(e.target.value)}
                                   type="password" placeholder= {t('setting.confirm_pass_placeholder')}/>
                            {newPasswordError.length > 0 && <p className={'red_text'}>{newPasswordError}</p>}
                        </label>
                    </div>
                    <div className="settings-block-form__row">

                        <label className="settings-block__label">
                            {t('setting.current_pass')}
                            <input value={password} onChange={(e) => setPassword(e.target.value)} type="password"
                                   placeholder= {t('setting.current_pass_placeholder')}/>
                            {passwordError.length > 0 &&
                                <p className={passwordError == t('setting.change_pass_success') ? 'green_text' : 'red_text'}>{passwordError}</p>}
                        </label>
                        <button onClick={(e) => ChangePassword(e,password, newPassword, confirmNewPassword, setPasswordError, setPassword, setNewPassword, setConfirmNewPassword, setNewPasswordError)}
                                className="btn btn--transparent settings-block__btn settings-block__btn--big">
                            {t('setting.btn_save')}
                        </button>
                    </div>
                </form>
            </div>
            <div className="settings-block">
                <p className="settings-block__title">
                    {t('setting.setting')}
                </p>
                <form action className="settings-block__form settings-block-form">
                    <div className="settings-block-form__row">
                        <label className="settings-block__label">
                    {t('setting.name')}
                            <input type="text" placeholder="User name" value={userName}
                                   onChange={(e) => setUserName(e.target.value)}/>
                        </label>
                        <div className="label settings-block__label settings-thumbnail">
                    {t('setting.photo')}
                            <div className="settings-thumbnail__row">
                                <div onClick={(e) => inputFile.current.click()} className="settings-thumbnail__picture">

                                    {previewImage !== null || userData.photo !== null ? <img
                                        src={previewImage !== null ? previewImage : userData.photo ? userData.photo : filmIcon}
                                        alt="name" className="settings-thumbnail__img"/>
                                        : <div className="settings-thumbnail__text">{userName.slice(0, 1) || 'P'}</div>

                                    }
                                </div>

                                <button onClick={(e) => handleUploadImage(e, false,inputFile,userData,uploadedImage,previewImage,setUserData,setEmailError)}
                                        className="settings-thumbnail__btn"> {t('setting.btn_upload')}
                                </button>
                                <button onClick={(e) => {
                                    setPreviewImage(null)
                                    setUploadedImage('')
                                    handleUploadImage(e, true,inputFile,userData,uploadedImage,previewImage,setUserData,setEmailError)
                                }} className="settings-thumbnail__remove"> {t('setting.btn_remove')}
                                </button>
                                <input type="file" onChange={(e) => getImage(e,)} ref={inputFile} id="myInput"
                                       style={{display: 'none'}}/>
                            </div>
                        </div>
                    </div>
                    <div className="settings-block-form__row">
                        <label className="settings-block__label">
                    {t('setting.language_lvl')}

                            <div onClick={() => setLangLevelOpened(!langLevelOpened)} className="custom-select">
                                <div className={langLevelOpened ? 'select-header opened' : 'select-header'}><span
                                    className="selected-option">{langLevel && langLevel.length > 0 ? langLevel : t('video.choose_option')}</span><i
                                    className="arrow-icon"></i>
                                </div>
                                <ul className={langLevelOpened ? 'options-list opened' : 'options-list'}>
                                    <li onClick={() => setLangLevel('beginner')}>beginner</li>
                                    <li onClick={() => setLangLevel('intermediate')}>intermediate</li>
                                    <li onClick={() => setLangLevel('advanced')}>advanced</li>
                                </ul>
                            </div>
                        </label>
                        <button onClick={(e) => UpdateUserData(e,userData,userName,langLevel,userLang,subtitleLang,setUserData,setDataSavedText,setEmailError)}
                                className="btn btn--transparent settings-block__btn settings-block__btn--big">
                                      {t('setting.btn_save')}
                        </button>
                    </div>
                    {dataSavedText && dataSavedText.length > 0 && <p className={'green_text'}>{dataSavedText}</p>}
                </form>
            </div>
            <div className="settings-block">
                <p className="settings-block__title">
                    {t('setting.language_title')}
                </p>
                <form action className="settings-block__form settings-block-form">
                    <div className="settings-block-form__row">
                        <label className="settings-block__label">
                    {t('setting.user_lang')}

                            <div onClick={() => setUserLangOpened(!userLangOpened)} className="custom-select">
                                <div className={userLangOpened ? 'select-header opened' : 'select-header'}><span
                                    className="selected-option">{userLang && userLang.length > 0 ? userLang : t('video.choose_option')}</span><i
                                    className="arrow-icon"></i>
                                </div>
                                <ul className={userLangOpened ? 'options-list opened' : 'options-list'}>
                                    <li onClick={() => setUserLang('en')}>en</li>
                                    <li onClick={() => setUserLang('ru')}>ru</li>
                                </ul>
                            </div>
                        </label>
                        <label className="settings-block__label">
                            {t('setting.translation_lang')}
                            <div onClick={() => setSubtitleLangOpened(!subtitleLangOpened)} className="custom-select">
                                <div className={subtitleLangOpened ? "select-header opened" : 'select-header'}><span
                                    className="selected-option">
                                        {subtitleLang && subtitleLang.length > 0 ? subtitleLang : t('video.choose_option')}
                                    </span><i
                                    className="arrow-icon"></i></div>
                                <ul className={subtitleLangOpened ? 'options-list opened' : 'options-list'}>
                                    <li onClick={() => setSubtitleLang('en')}>en</li>
                                    <li onClick={() => setSubtitleLang('ru')}>ru</li>
                                </ul>
                            </div>
                        </label>
                    </div>
                </form>
            </div>
        </div>
    </section>
    </>
}

export default Profile
