import InvertLogo from '../../img/invert-logo.svg'


import {useEffect, useState} from "react";
import SubHeader from "../../components/SubHeader";
import {json} from "react-router-dom";
import {useTranslation} from "react-i18next";


const Notifications = () => {
    const { t } = useTranslation();

    const [specialOffers, setSpecialOffers] = useState(null)
    const [newShows, setNewShows] = useState(null)
    const [browserNotification, setBrowserNotification] = useState(null)
    const [currentBrowserNotification, setCurrentBrowserNotification] = useState(null)


    useEffect(() => {
        setSpecialOffers(JSON.parse(localStorage.getItem('specialOffers')))
        setNewShows(JSON.parse(localStorage.getItem('newShows')))
        setBrowserNotification(JSON.parse(localStorage.getItem('browserNotification')))
        setCurrentBrowserNotification(JSON.parse(localStorage.getItem('currentBrowserNotification')))

    }, []);


    useEffect(() => {
      specialOffers !== null &&  localStorage.setItem('specialOffers', JSON.stringify(specialOffers))
       newShows !== null && localStorage.setItem('newShows', JSON.stringify(newShows))
       browserNotification  !== null && localStorage.setItem('browserNotification', JSON.stringify(browserNotification))
       currentBrowserNotification  !== null && localStorage.setItem('currentBrowserNotification', JSON.stringify(currentBrowserNotification))

        if(browserNotification === true) {
            Notification.requestPermission();

        }


    }, [specialOffers, newShows, browserNotification, currentBrowserNotification]);


    return <>
        <SubHeader/>
        <section className="notifications">
            <div className="container">
                <div className="notifications-block">
                    <p className="notifications-block__title"> {t('notifications.common_title')}</p>
                    <ul className="notifications-block__list">
                        <li className="notifications-block__item notifications-block-item">
                            <label className="custom-checkbox__label">
            <span className="notifications-block-item__name">
              {t('notifications.common_btn1')}
            </span>
                                <input
                                    type="checkbox"
                                    className="custom-checkbox"
                                    checked={specialOffers}
                                    onChange={() => setSpecialOffers(!specialOffers)}
                                />
                                <div className="custom-checkbox__wrapper">
                                    <span className="custom-checkbox__selector"/>
                                </div>
                            </label>
                        </li>
                        <li className="notifications-block__item notifications-block-item">
                            <label className="custom-checkbox__label">
            <span className="notifications-block-item__name">
                {t('notifications.common_btn2')}
            </span>
                                <input type="checkbox" className="custom-checkbox"
                                       checked={newShows}
                                       onChange={() => setNewShows(!newShows)}

                                />
                                <div className="custom-checkbox__wrapper">
                                    <span className="custom-checkbox__selector"/>
                                </div>
                            </label>
                        </li>

                    </ul>
                </div>
                <div className="notifications-block">
                    {/*<p className="notifications-block__title">Common notification settings</p>*/}
                    <ul className="notifications-block__list">
                        <li className="notifications-block__item notifications-block-item">
                            <label className="custom-checkbox__label">
            <span className="notifications-block-item__name">
              {t('notifications.common_btn3')}
            </span>
                                <input
                                    type="checkbox"
                                    className="custom-checkbox"
                                    checked={browserNotification}
                                    onChange={() => setBrowserNotification(!browserNotification)}
                                />
                                <div className="custom-checkbox__wrapper">
                                    <span className="custom-checkbox__selector"/>
                                </div>
                            </label>
                        </li>
                        <li className="notifications-block__item notifications-block-item">
                            <label className="custom-checkbox__label">
            <span className="notifications-block-item__name">
                 {t('notifications.common_btn4')}
            </span>
                                <input type="checkbox" className="custom-checkbox"
                                       checked={currentBrowserNotification}
                                       onChange={() => setCurrentBrowserNotification(!currentBrowserNotification)}
                                />
                                <div className="custom-checkbox__wrapper">
                                    <span className="custom-checkbox__selector"/>
                                </div>
                            </label>
                        </li>
                    </ul>
                </div>
            </div>
        </section>

    </>
}

export default Notifications
