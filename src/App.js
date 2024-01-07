import logo from './logo.svg';
import './App.css';
import Header from "./components/header";
import {BrowserRouter as Router, Routes, Route, BrowserRouter} from 'react-router-dom';
import Profile from "./Views/Profile/Profile";
import Footer from "./components/footer";
import {useEffect, useState} from "react";
import axios from "axios";
import {api_url} from "./utils/utils";
import Cookies from 'js-cookie';

import Dictionary from "./Views/Profile/Dictionary";
import SubHeader from "./components/SubHeader";
import Videos from "./Views/Videos";
import SerialCard from "./components/SerialCard";
import Serial from "./Views/Serial";
import MainPage from "./Views/MainPage";
import FAQ from "./Views/FAQ";
import Notifications from "./Views/Profile/Notifications";
import Subscription from "./Views/Profile/Subscription";
import Terms from "./Views/Terms";
import {getFavourites, getWatched} from "./api/serials";
import {IntlProvider} from "react-intl";
import { useTranslation } from 'react-i18next';
import i18n from "i18next";
import Policy from "./Views/Policy";


function App() {


    const [showLoginModal, setShowLoginModal] = useState(false)

    const [userLogged, setUserLogged ] = useState(false)

    const [userData, setUserData] = useState({})

    const [currentLang, setCurrentLang] = useState('ru')

    const [favouriteSerials, setFavouriteSerials] = useState([])
    const [watchedSerials, setWatchedSerials] = useState([])


    useEffect(() => {
        const token = Cookies.get('token');

        if(localStorage.getItem('userLogged') === 'true' && token ) {
                  setShowLoginModal(false)
                  getUserData(token)
                  getFavourites(token,setFavouriteSerials)
                  getWatched(token,setWatchedSerials)
        }

    }, [])


    useEffect(() => {
        changeLanguage(currentLang)
    }, [currentLang])

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    const getUserData = (token, bearer) => {

        axios.get(api_url + 'users/me/', {
            withCredentials: true,
            headers: {
                'Accept': 'application/json',
                "Authorization": token,
            }
        })
            .then(function (response) {

                setShowLoginModal(false)
                localStorage.setItem('userLogged', 'true')
                localStorage.setItem('userData', JSON.stringify(response.data))
                console.log('res userData',response.data);
                setCurrentLang(response.data.interface_language)
                setUserLogged(true)
                setUserData(response.data)
            })
            .catch(function (error) {
                console.log('err',error.response.data);

            });

    }



  return (
    <div >
        <Router>
        <Header showLoginModal={showLoginModal}
                setShowLoginModal={setShowLoginModal}
                getUserData={getUserData}
                userData={userData}
                setUserData={setUserData}
                userLogged={userLogged}
                favouriteSerials={favouriteSerials}
                setFavouriteSerials={setFavouriteSerials}
                watchedSerials={watchedSerials}
                setWatchedSerials={setWatchedSerials}
                getFavourites={getFavourites}
                currentLang={currentLang}
                setCurrentLang={setCurrentLang}
        />
        <main>


            <Routes>
                <Route path="/" element={ <MainPage  />} />
                <Route path="/settings" element={ <Profile  userData={userData}  setUserData={setUserData} />} />
                <Route path="/dictionary" element={ <Dictionary />} />
                <Route path="/videos" element={ <Videos setFavouriteSerials={setFavouriteSerials}
                                                        getFavourites={getFavourites}
                                                        getWatched={getWatched}
                                                        favouriteSerials={favouriteSerials}
                                                        setWatchedSerials={setWatchedSerials}
                />}
                />
                <Route  path="/videos/:id" element={ <Serial  favouriteSerials={favouriteSerials}    />}/>
                <Route  path="/notifications" element={ <Notifications />} />
                <Route  path="/subscription" element={ <Subscription />} />
                <Route  path="/faq" element={ <FAQ />} />
                <Route  path="/terms" element={ <Terms />} />
                <Route  path="/policy" element={ <Policy />} />
            </Routes>

        </main>

        <Footer />
        </Router>
    </div >
  );
}

export default App;
