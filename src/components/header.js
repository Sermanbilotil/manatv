import logo from '../img/mana-logo.svg'
import filmIcon from '../img/film-icon.png'

import {useEffect, useState} from "react";

import Login from "./Modals/Login";
import SignUp from "./Modals/SignUp";
import ForgotPass from "./Modals/ForgotPass";
import axios from 'axios';
import Cookies from 'js-cookie';

import {api_url, ValidateEmail} from "../utils/utils";
import EmailSend from "./Modals/EmailSend";
import {Link, useLocation, useNavigate} from "react-router-dom";
import SerialsModal from "./Modals/SerialsModal";
import NotificationsModal from "./Modals/NotificationsModal";


const Header = ({userLogged, getUserData, userData,showLoginModal, setShowLoginModal}) => {
    const { pathname } = useLocation();
    const navigate = useNavigate();
    const [showSignModal, setShowSignModal] = useState(false)
    const [showPasswordModal, setShowPasswordModal] = useState(false)
    const [showEmailSendModal, setEmailSendModal] = useState(false)
    const [selectOpened, setSelectOpened] = useState(false)
    const [showNotifications, setShowNotifications] = useState(false)
    const [showFavourites, setShowFavourites] = useState(false)


    useEffect(() => {
        setSelectOpened(false)
    }, [pathname]);


    useEffect(() => {
        console.log(showNotifications)
    }, [showNotifications]);



    const [userName, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [validEmail, setValidEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [validPassword, setValidPassword] = useState('')

    const [confirmLetterSend, setConfirmLetterSend] = useState('Confirmation letter has been sent to your e-mail address')





    const Register = (e) => {
        e.preventDefault();
        if(ValidateEmail(email)) {
            axios.post(api_url + 'users/', {
                email: email,
                password: password,
                name: userName,
                language: "en"
            }, {
                withCredentials: true,
                headers: {
                    'Accept': 'application/json',
                }
            })
                .then(function (response) {
                    console.log('res',response);
                    setValidEmail('')
                    setShowSignModal(false)
                    setEmailSendModal(true)
                })
                .catch(function (error) {
                    console.log('err',error.response.data);
                    if(error.response.data.email) {
                        setValidEmail(error.response.data.email[0])
                    }
                });

        } else {
            setValidEmail('Email not valid')
        }
    }

    const LoginUser = (e) => {
        e.preventDefault();
        if(ValidateEmail(email)) {
            axios.post(api_url + 'users/user_login/', {
                email: email,
                password: password,
            }, {
                withCredentials: true,
                headers: {
                    'Accept': 'application/json',
                }
            })
                .then(function (response) {
                    console.log('response',response);
                    Cookies.set('token',  'Token ' + response.data.detail);
                    localStorage.setItem('authType',  'token');
                    console.log('log','Token' + response.data.detail )
                    getUserData('Token ' + response.data.detail)
                    navigate('/videos')
                })
                .catch(function (error) {
                    console.log('err',error.response.data);
                    if(error.response.data.detail){
                        setValidPassword(error.response.data.detail)
                    }

                });

        } else {
            setValidEmail('Email not valid')
        }
    }

    const Logout = () => {
       localStorage.removeItem('userLogged')
       localStorage.removeItem('userData')
       localStorage.removeItem('authType')
        Cookies.set('token', '')

        setShowLoginModal(true)
    }




    return <header className="site-header">
        {showLoginModal && <Login setShowLoginModal={setShowLoginModal}
                                  setShowSignModal={setShowSignModal}
                                  setShowPasswordModal={setShowPasswordModal}
                                  email={email}
                                  setEmail={setEmail}
                                  password={password}
                                  setPassword={setPassword}
                                  LoginUser={LoginUser}
                                  validPassword={validPassword}
                                  getUserData={getUserData}
        />}
        {showSignModal && <SignUp setShowSignModal={setShowSignModal}
                                  setShowLoginModal={setShowLoginModal}
                                  userName={userName}
                                  setUserName={setUserName}
                                  email={email}
                                  setEmail={setEmail}
                                  validEmail={validEmail}
                                  confirmPassword={confirmPassword}
                                  setConfirmPassword={setConfirmPassword}
                                  password={password}
                                  setPassword={setPassword}
                                  Register={Register}
                                  confirmLetterSend={confirmLetterSend}


        />}


        {showEmailSendModal && <EmailSend
            setShowLoginModal={setShowLoginModal}
            confirmLetterSend={confirmLetterSend}
            setEmailSendModal={setEmailSendModal}


        />}








        {showPasswordModal && <ForgotPass setShowPasswordModal={setShowPasswordModal}
                                          setShowLoginModal={setShowLoginModal}
                                          setEmailSendModal={setEmailSendModal}
                                          setConfirmLetterSend={setConfirmLetterSend}


            />}
        <div className="container">
            <div className="site-header__inner">
                <a href="/" className="site-header__logo">
                    <img src={logo} alt="logo"/>
                </a>

                <div className="site-header__menu site-header-menu">
                    <nav className="site-header-menu__nav">
                        <ul className="site-header-menu__list site-header-menu-list">
                            <li className="site-header-menu-list__item">
                                <Link to="/videos" className="site-header-menu-list__link">Videos</Link>
                            </li>
                            <li className="site-header-menu-list__item">
                                <Link to="" className="site-header-menu-list__link">I watching</Link>
                            </li>

                            <li className="site-header-menu-list__item">
                                <div onClick={() => {
                                    setShowNotifications(!showNotifications)
                                    setShowFavourites(false)
                                }} >
                                    {showNotifications ? <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M27.725 21.9925C27.0313 20.7975 26 17.4163 26 13C26 10.3478 24.9464 7.8043 23.0711 5.92893C21.1957 4.05357 18.6522 3 16 3C13.3479 3 10.8043 4.05357 8.92895 5.92893C7.05358 7.8043 6.00002 10.3478 6.00002 13C6.00002 17.4175 4.96752 20.7975 4.27377 21.9925C4.0966 22.2963 4.00268 22.6415 4.00148 22.9931C4.00027 23.3448 4.09182 23.6906 4.26689 23.9956C4.44196 24.3006 4.69437 24.5541 4.99865 24.7304C5.30293 24.9068 5.64833 24.9997 6.00002 25H11.1013C11.332 26.1289 11.9455 27.1436 12.8382 27.8722C13.7308 28.6009 14.8477 28.9989 16 28.9989C17.1523 28.9989 18.2692 28.6009 19.1618 27.8722C20.0545 27.1436 20.6681 26.1289 20.8988 25H26C26.3516 24.9995 26.6968 24.9064 27.0009 24.73C27.3051 24.5535 27.5573 24.3 27.7322 23.9951C27.9071 23.6901 27.9986 23.3444 27.9973 22.9928C27.996 22.6412 27.9021 22.2962 27.725 21.9925ZM16 27C15.3798 26.9998 14.7749 26.8074 14.2685 26.4492C13.7622 26.0911 13.3793 25.5848 13.1725 25H18.8275C18.6208 25.5848 18.2379 26.0911 17.7315 26.4492C17.2252 26.8074 16.6202 26.9998 16 27Z"
                                                  fill="#111111"/>
                                        </svg>
                                        :  <svg width="32" height="32" viewBox="0 0 32 32" fill="#000" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M27.5085 22.1175C26.801 20.9 25.7498 17.4662 25.7498 13C25.7498 10.4141 24.7226 7.93419 22.8941 6.10571C21.0656 4.27723 18.5856 3.25 15.9998 3.25C13.4139 3.25 10.934 4.27723 9.1055 6.10571C7.27702 7.93419 6.24979 10.4141 6.24979 13C6.24979 17.4675 5.19729 20.9 4.48979 22.1175C4.33456 22.3833 4.25219 22.6854 4.25099 22.9932C4.24979 23.301 4.32981 23.6037 4.48297 23.8707C4.63613 24.1377 4.85701 24.3596 5.12333 24.514C5.38964 24.6684 5.69196 24.7498 5.99979 24.75H11.3098C11.492 25.8618 12.0634 26.8727 12.922 27.6021C13.7807 28.3315 14.8706 28.732 15.9973 28.732C17.1239 28.732 18.2139 28.3315 19.0725 27.6021C19.9312 26.8727 20.5026 25.8618 20.6848 24.75H25.9998C26.3074 24.7494 26.6094 24.6676 26.8754 24.5131C27.1413 24.3585 27.3619 24.1366 27.5147 23.8696C27.6676 23.6027 27.7474 23.3002 27.7461 22.9926C27.7448 22.685 27.6624 22.3831 27.5073 22.1175H27.5085ZM15.9998 27.25C15.2684 27.2498 14.5585 27.0029 13.9848 26.5492C13.4112 26.0955 13.0073 25.4616 12.8385 24.75H19.161C18.9923 25.4616 18.5884 26.0955 18.0147 26.5492C17.4411 27.0029 16.7312 27.2498 15.9998 27.25ZM26.2135 23.125C26.1929 23.1633 26.1622 23.1952 26.1248 23.2172C26.0873 23.2393 26.0445 23.2506 26.001 23.25H5.99979C5.95632 23.2506 5.91352 23.2393 5.87605 23.2172C5.83858 23.1952 5.80788 23.1633 5.78729 23.125C5.76534 23.087 5.75379 23.0439 5.75379 23C5.75379 22.9561 5.76534 22.913 5.78729 22.875C6.73354 21.25 7.74979 17.4613 7.74979 13C7.74979 10.812 8.61898 8.71354 10.1662 7.16637C11.7133 5.61919 13.8118 4.75 15.9998 4.75C18.1878 4.75 20.2862 5.61919 21.8334 7.16637C23.3806 8.71354 24.2498 10.812 24.2498 13C24.2498 17.46 25.2673 21.2437 26.2135 22.875C26.2355 22.913 26.247 22.9561 26.247 23C26.247 23.0439 26.2355 23.087 26.2135 23.125Z"
                                                  fill="#111111"/>
                                        </svg>
                                    }
                                </div>

                                {showNotifications && <NotificationsModal />}
                            </li>

                            <li  className="site-header-menu-list__item">
                                <div onClick={() => {
                                    setShowFavourites(!showFavourites)
                                    setShowNotifications(false)
                                }}>
                                {showFavourites ?  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M29.9998 12.25C30.002 13.2023 29.8153 14.1456 29.4505 15.0253C29.0858 15.9049 28.5502 16.7036 27.8748 17.375L16.7123 28.7025C16.6193 28.797 16.5084 28.872 16.386 28.9232C16.2637 28.9744 16.1324 29.0008 15.9998 29.0008C15.8672 29.0008 15.7359 28.9744 15.6136 28.9232C15.4913 28.872 15.3804 28.797 15.2873 28.7025L4.12482 17.375C2.76393 16.0157 1.99873 14.1716 1.99756 12.2481C1.99639 10.3247 2.75934 8.47961 4.11857 7.11872C5.47781 5.75783 7.32199 4.99263 9.24541 4.99146C11.1688 4.99028 13.0139 5.75324 14.3748 7.11247L15.9998 8.63122L17.6361 7.10747C18.6516 6.09696 19.9438 5.40998 21.3495 5.13326C22.7552 4.85654 24.2113 5.00249 25.5341 5.55269C26.8569 6.10288 27.987 7.03265 28.7818 8.22462C29.5766 9.41659 30.0005 10.8173 29.9998 12.25Z" fill="#111111"/>
                                    </svg>
                                    : <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M27.7004 7.29747C26.3884 5.98812 24.611 5.25192 22.7575 5.25005C20.9039 5.24817 19.1251 5.98077 17.8104 7.28747L16.0004 8.97247L14.1904 7.28747C12.8767 5.97548 11.0957 5.23906 9.2391 5.24024C7.38249 5.24141 5.60239 5.98007 4.2904 7.29372C2.9784 8.60737 2.24199 10.3884 2.24317 12.245C2.24434 14.1016 2.983 15.8817 4.29665 17.1937L15.4666 28.5262C15.5364 28.5969 15.6195 28.653 15.7111 28.6913C15.8028 28.7296 15.9011 28.7493 16.0004 28.7493C16.0997 28.7493 16.198 28.7296 16.2897 28.6913C16.3813 28.653 16.4644 28.5969 16.5341 28.5262L27.7004 17.1987C28.3507 16.5487 28.8665 15.7769 29.2184 14.9275C29.5704 14.078 29.7515 13.1676 29.7515 12.2481C29.7515 11.3286 29.5704 10.4182 29.2184 9.56874C28.8665 8.71929 28.3507 7.94751 27.7004 7.29747ZM26.6354 16.1412L16.0004 26.9312L5.36165 16.1375C4.3362 15.1048 3.76181 13.7079 3.76429 12.2526C3.76677 10.7973 4.34592 9.40233 5.37488 8.3732C6.40384 7.34407 7.79874 6.7647 9.25402 6.76199C10.7093 6.75927 12.1064 7.33344 13.1391 8.35872C13.1452 8.3652 13.1519 8.37106 13.1591 8.37622L15.4891 10.5462C15.628 10.6756 15.8107 10.7475 16.0004 10.7475C16.1901 10.7475 16.3728 10.6756 16.5116 10.5462L18.8416 8.37497C18.8489 8.36981 18.8556 8.36395 18.8616 8.35747C19.372 7.84408 19.9787 7.43649 20.6469 7.15807C21.3151 6.87965 22.0317 6.73588 22.7556 6.73502C23.4795 6.73415 24.1965 6.87619 24.8654 7.153C25.5343 7.42981 26.1419 7.83595 26.6535 8.34811C27.1651 8.86028 27.5706 9.46839 27.8466 10.1376C28.1227 10.8068 28.2639 11.5239 28.2622 12.2478C28.2605 12.9717 28.116 13.6881 27.8368 14.3561C27.5576 15.024 27.1494 15.6302 26.6354 16.14V16.1412Z" fill="#111111"/>
                                    </svg>
                                }
                                </div>
                                {showFavourites && <SerialsModal />}
                            </li>


                            <li className="site-header-menu-list__item site-header-menu-list__item--parent">
                                <a href="#"
                                   className="site-header-menu-list__link site-header-menu-list__link--has-dropdown">En</a>

                                <ul className="site-header-menu-list__sub-menu">
                                    <li className="site-header-menu-list__inner">
                                        <a href="#" className="site-header-menu-list__link">Ua</a>
                                    </li>
                                    <li className="site-header-menu-list__inner">
                                        <a href="#" className="site-header-menu-list__link">Fr</a>
                                    </li>
                                </ul>
                            </li>

                            <li className="site-header-menu-list__item site-header-menu-list__item--search site-search">
                                <input type="text" className="site-search__input" name="search-text"
                                       placeholder="Write the text"/>
                                <ul className="site-search__list">
                                    <li className="site-search__item site-search-item">
                                        <a href="video.html" className="site-search-item__link">
                                            <img className="site-search-item__img" src="../img/film-icon.png"
                                                 alt="New iron man series"/>
                                            <span className="site-search-item__name">New iron man series</span>
                                        </a>
                                    </li>
                                    <li className="site-search__item site-search-item">
                                        <a href="video.html" className="site-search-item__link">
                                            <img className="site-search-item__img" src="../img/film-icon.png"
                                                 alt="New iron man series"/>
                                            <span className="site-search-item__name">New iron man series</span>
                                        </a>
                                    </li>
                                    <li className="site-search__item site-search-item">
                                        <a href="video.html" className="site-search-item__link">
                                            <img className="site-search-item__img" src="../img/film-icon.png"
                                                 alt="New iron man series"/>
                                            <span className="site-search-item__name">New iron man series</span>
                                        </a>
                                    </li>
                                </ul>
                            </li>

                            {!userLogged && <><li className="site-header-menu-list__item site-header-menu-list__item--desk">
                                <a onClick={() => setShowSignModal(true)} href="#"
                                   className="btn btn--transparent site-header-menu-list__btn btn--signup">Sign
                                    up</a>
                            </li>
                                <li className="site-header-menu-list__item site-header-menu-list__item--desk">
                                    <a onClick={() => setShowLoginModal(true)} href="#"
                                       className="btn btn--black site-header-menu-list__btn btn--login">Log in</a>
                                </li> </>}

                            {userLogged &&  <li className="site-header-menu-list__item site-header-menu-list__item--account site-account">
                                <button onClick={() => setSelectOpened(!selectOpened)} className="site-account__btn">
                                    <img className="site-account__img" src={userData.photo ? userData.photo :  filmIcon} alt="Name"/>
                                    <span className="site-account__name">
                                        {userData.name}
                                    </span>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16">
                                        <path fill="#999"
                                              d="M8.005 13c.23 0 .46-.094.617-.272l7.13-7.446A.845.845 0 0 0 16 4.68c0-.489-.36-.864-.838-.864a.866.866 0 0 0-.599.244l-7.056 7.352h.986L1.437 4.061a.833.833 0 0 0-.599-.244C.36 3.817 0 4.192 0 4.68c0 .234.092.441.249.61l7.13 7.437a.857.857 0 0 0 .626.272Z"/>
                                    </svg>
                                </button>
                                <ul className={ selectOpened ? 'site-account__list active' : 'site-account__list' }>
                                    <li className="site-account__item site-account-item">
                                        <Link to="/subscription" className="site-account-item__link">
                                            <svg className="site-account-item__img" xmlns="http://www.w3.org/2000/svg"
                                                 fill="none" viewBox="0 0 24 25">
                                                <path fill="#111"
                                                      d="M21.262 10.111a1.312 1.312 0 0 0 1.05-1.285V6.5A1.313 1.313 0 0 0 21 5.187H3A1.313 1.313 0 0 0 1.687 6.5v2.326a1.313 1.313 0 0 0 1.051 1.285 2.438 2.438 0 0 1 0 4.781 1.313 1.313 0 0 0-1.05 1.282V18.5A1.313 1.313 0 0 0 3 19.813h18a1.313 1.313 0 0 0 1.313-1.313v-2.326a1.313 1.313 0 0 0-1.051-1.285 2.438 2.438 0 0 1 0-4.781v.003ZM2.812 18.5v-2.326a.187.187 0 0 1 .15-.183 3.563 3.563 0 0 0 0-6.982.188.188 0 0 1-.15-.188V6.5A.187.187 0 0 1 3 6.312h5.438v12.375H3a.188.188 0 0 1-.188-.187Zm18.226-2.509a.187.187 0 0 1 .15.183V18.5a.188.188 0 0 1-.188.188H9.562V6.313H21a.188.188 0 0 1 .188.187v2.326a.188.188 0 0 1-.15.187 3.563 3.563 0 0 0 0 6.983v-.005Z"/>
                                            </svg>
                                            <span className="site-account-item__name">Subscription</span>
                                            <span className="site-account-item__left">51 days left</span>
                                        </Link>
                                    </li>
                                    <li className="site-account__item site-account-item">
                                        <Link to="/dictionary" className="site-account-item__link">
                                            <svg className="site-account-item__img" xmlns="http://www.w3.org/2000/svg"
                                                 fill="none" viewBox="0 0 24 25">
                                                <path fill="#111"
                                                      d="M19.5 2.938H6.75A2.813 2.813 0 0 0 3.937 5.75V21.5a.562.562 0 0 0 .563.563H18a.562.562 0 1 0 0-1.125H5.062v-.188a1.687 1.687 0 0 1 1.688-1.688H19.5a.562.562 0 0 0 .563-.562v-15a.563.563 0 0 0-.563-.563Zm-8.438 1.124h4.876v7.313L13.837 9.8a.563.563 0 0 0-.675 0l-2.1 1.575V4.062Zm7.876 13.875H6.75a2.8 2.8 0 0 0-1.688.563V5.75A1.687 1.687 0 0 1 6.75 4.062h3.188V12.5a.562.562 0 0 0 .9.45l2.662-1.997 2.663 1.997a.563.563 0 0 0 .9-.45V4.062h1.875v13.875Z"/>
                                            </svg>
                                            <span className="site-account-item__name">Dictionary</span>
                                        </Link>
                                    </li>
                                    <li className="site-account__item site-account-item">
                                        <Link to="/notifications" className="site-account-item__link">
                                            <svg className="site-account-item__img" xmlns="http://www.w3.org/2000/svg"
                                                 fill="none" viewBox="0 0 24 25">
                                                <path fill="#111"
                                                      d="M20.632 17.088c-.531-.913-1.32-3.488-1.32-6.838a7.312 7.312 0 1 0-14.625 0c0 3.35-.789 5.925-1.32 6.838A1.313 1.313 0 0 0 4.5 19.062h3.982a3.563 3.563 0 0 0 7.032 0H19.5a1.313 1.313 0 0 0 1.13-1.974h.002ZM12 20.938a2.438 2.438 0 0 1-2.37-1.875h4.74A2.438 2.438 0 0 1 12 20.938Zm7.66-3.094a.178.178 0 0 1-.16.093h-15a.177.177 0 0 1-.16-.093.188.188 0 0 1 0-.188c.71-1.218 1.472-4.06 1.472-7.406a6.187 6.187 0 0 1 12.375 0c0 3.345.764 6.183 1.473 7.406a.188.188 0 0 1 0 .188Z"/>
                                            </svg>
                                            <span className="site-account-item__name">Notifications</span>
                                        </Link>
                                    </li>
                                    <li className="site-account__item site-account-item">
                                        <Link to="/settings" className="site-account-item__link">
                                            <svg className="site-account-item__img" xmlns="http://www.w3.org/2000/svg"
                                                 fill="none" viewBox="0 0 24 25">
                                                <path fill="#111"
                                                      d="M12 8.188a4.313 4.313 0 1 0 0 8.625 4.313 4.313 0 0 0 0-8.625Zm0 7.5a3.187 3.187 0 1 1 0-6.375 3.187 3.187 0 0 1 0 6.374Zm8.063-2.922a8.441 8.441 0 0 0 0-.532l1.437-1.796a.562.562 0 0 0 .104-.496 9.877 9.877 0 0 0-1.002-2.42.563.563 0 0 0-.424-.281l-2.292-.254a7.553 7.553 0 0 0-.375-.375l-.255-2.294a.561.561 0 0 0-.282-.424 9.904 9.904 0 0 0-2.416-1 .562.562 0 0 0-.495.107l-1.8 1.441a8.411 8.411 0 0 0-.533 0L9.938 3a.562.562 0 0 0-.496-.104 9.876 9.876 0 0 0-2.42 1.002.562.562 0 0 0-.281.424l-.25 2.292c-.13.122-.255.247-.376.375l-2.294.261a.562.562 0 0 0-.424.281 9.905 9.905 0 0 0-1 2.416.563.563 0 0 0 .104.49l1.441 1.8a8.411 8.411 0 0 0 0 .533L2.5 14.567a.562.562 0 0 0-.104.496 9.876 9.876 0 0 0 1.002 2.415.563.563 0 0 0 .424.281l2.292.254c.122.13.247.255.375.375l.261 2.29a.562.562 0 0 0 .281.425c.758.439 1.57.775 2.416 1a.562.562 0 0 0 .496-.104l1.79-1.436c.178.005.356.005.533 0l1.801 1.441a.563.563 0 0 0 .496.104 9.872 9.872 0 0 0 2.415-1 .563.563 0 0 0 .281-.425l.254-2.293c.13-.12.255-.245.375-.375l2.294-.255a.563.563 0 0 0 .424-.28 9.892 9.892 0 0 0 1-2.417.561.561 0 0 0-.104-.496l-1.44-1.8Zm-.291 3.903-2.216.247a.563.563 0 0 0-.358.187 7.027 7.027 0 0 1-.592.592.563.563 0 0 0-.188.358l-.246 2.215a8.838 8.838 0 0 1-1.628.67l-1.74-1.394a.562.562 0 0 0-.352-.122h-.034a7.335 7.335 0 0 1-.836 0 .562.562 0 0 0-.385.121l-1.74 1.395a8.824 8.824 0 0 1-1.626-.673l-.247-2.214a.562.562 0 0 0-.187-.358 7.035 7.035 0 0 1-.592-.592.563.563 0 0 0-.358-.187l-2.215-.247a8.84 8.84 0 0 1-.67-1.623l1.394-1.74a.563.563 0 0 0 .122-.386 7.317 7.317 0 0 1 0-.836.563.563 0 0 0-.122-.385l-1.393-1.74c.169-.563.394-1.108.672-1.626l2.214-.247a.562.562 0 0 0 .358-.187c.185-.209.383-.406.592-.592a.563.563 0 0 0 .187-.358l.247-2.215a8.839 8.839 0 0 1 1.623-.67l1.74 1.394c.11.087.247.13.386.121.278-.015.558-.015.836 0a.563.563 0 0 0 .385-.121l1.74-1.394c.563.17 1.108.395 1.626.673l.247 2.216a.563.563 0 0 0 .187.358c.209.185.406.383.592.592.092.104.22.171.358.187l2.215.247c.276.516.5 1.06.67 1.62l-1.394 1.742a.562.562 0 0 0-.122.385c.016.278.016.558 0 .836a.562.562 0 0 0 .122.385l1.393 1.74a8.826 8.826 0 0 1-.67 1.626h.005Z"/>
                                            </svg>
                                            <span className="site-account-item__name">Settings</span>
                                        </Link>
                                    </li>
                                    <li className="site-account__item site-account-item">
                                        <a onClick={() => Logout()}  href="/" className="site-account-item__link">
                                            <svg className="site-account-item__img" xmlns="http://www.w3.org/2000/svg"
                                                 fill="none" viewBox="0 0 24 25">
                                                <path fill="#111"
                                                      d="M10.313 20.75a.562.562 0 0 1-.563.563H4.5A1.313 1.313 0 0 1 3.187 20V5A1.313 1.313 0 0 1 4.5 3.687h5.25a.562.562 0 1 1 0 1.126H4.5A.187.187 0 0 0 4.312 5v15a.188.188 0 0 0 .188.188h5.25a.562.562 0 0 1 .563.562Zm10.335-8.648-3.75-3.75a.563.563 0 0 0-.796.796l2.79 2.79H9.75a.563.563 0 0 0 0 1.124h9.142l-2.79 2.79a.561.561 0 1 0 .796.796l3.75-3.75a.563.563 0 0 0 0-.796Z"/>
                                            </svg>
                                            <span className="site-account-item__name">Sign out</span>
                                        </a>
                                    </li>
                                </ul>
                            </li>}
                        </ul>
                    </nav>
                    <div className="site-header-menu__mob">
                        <a href="" className="btn btn--transparent site-header-menu-list__btn btn--signup">Sign up</a>
                        <a href="#" className="btn btn--black site-header-menu-list__btn btn--login">Log in</a>
                    </div>
                    <button className="site-header-menu__burger burger-btn">
                        <span className="burger-btn__inner">
                            <span></span>
                        </span>
                    </button>
                </div>
            </div>
        </div>


    </header>
}

export default Header
