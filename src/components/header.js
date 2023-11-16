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


const Header = ({userLogged, getUserData, userData,showLoginModal, setShowLoginModal}) => {
    const { pathname } = useLocation();
    const navigate = useNavigate();
    const [showSignModal, setShowSignModal] = useState(false)
    const [showPasswordModal, setShowPasswordModal] = useState(false)
    const [showEmailSendModal, setEmailSendModal] = useState(false)

    const [selectOpened, setSelectOpened] = useState(false)


    useEffect(() => {
        setSelectOpened(false)
    }, [pathname]);

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
                                            <img className="site-search-item__img" src="img/film-icon.png"
                                                 alt="New iron man series"/>
                                            <span className="site-search-item__name">New iron man series</span>
                                        </a>
                                    </li>
                                    <li className="site-search__item site-search-item">
                                        <a href="video.html" className="site-search-item__link">
                                            <img className="site-search-item__img" src="img/film-icon.png"
                                                 alt="New iron man series"/>
                                            <span className="site-search-item__name">New iron man series</span>
                                        </a>
                                    </li>
                                    <li className="site-search__item site-search-item">
                                        <a href="video.html" className="site-search-item__link">
                                            <img className="site-search-item__img" src="img/film-icon.png"
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
