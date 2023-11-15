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

function App() {
    const [showLoginModal, setShowLoginModal] = useState(false)

    const [userLogged, setUserLogged ] = useState(false)

    const [userData, setUserData] = useState({})


    useEffect(() => {
        const token = Cookies.get('token');

        if(localStorage.getItem('userLogged') === 'true' && token ) {
            setShowLoginModal(false)
            console.log(' loc localStorage.getItem(\'authType\')', localStorage.getItem('authType'))


                  getUserData(token)



        }

    }, [])

    const getUserData = (token, bearer) => {
        console.log('token', token)

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
                console.log('res',response.data);
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
        <Header showLoginModal={showLoginModal} setShowLoginModal={setShowLoginModal} getUserData={getUserData} userData={userData} userLogged={userLogged} />
        <main>


            <Routes>
                <Route path="/" element={ <MainPage  />} />
                <Route path="/settings" element={ <Profile  userData={userData}  setUserData={setUserData} />} />
                <Route path="/dictionary" element={ <Dictionary />} />
                <Route path="/videos" element={ <Videos />} />
                <Route  path="/videos/:id" element={ <Serial />} />
                <Route  path="/notifications" element={ <Notifications />} />
                <Route  path="/subscription" element={ <Subscription />} />
                <Route  path="/faq" element={ <FAQ />} />
                <Route  path="/terms" element={ <Terms />} />
            </Routes>

        </main>

        <Footer />
        </Router>
    </div >
  );
}

export default App;
