


import InvertLogo from '../../img/invert-logo.svg'


import {useEffect} from "react";
import SubHeader from "../../components/SubHeader";



const Notifications = () => {


    useEffect(() => {

    }, []);


    return <>
        <SubHeader />
    <section className="notifications">
        <div className="container">
            <div className="notifications-block">
                <p className="notifications-block__title">Common notification settings</p>
                <ul className="notifications-block__list">
                    <li className="notifications-block__item notifications-block-item">
                        <label className="custom-checkbox__label">
            <span className="notifications-block-item__name">
              Special offers and discounts
            </span>
                            <input
                                type="checkbox"
                                className="custom-checkbox"
                                defaultChecked=""
                            />
                            <div className="custom-checkbox__wrapper">
                                <span className="custom-checkbox__selector" />
                            </div>
                        </label>
                    </li>
                    <li className="notifications-block__item notifications-block-item">
                        <label className="custom-checkbox__label">
            <span className="notifications-block-item__name">
              New TV shows and movies
            </span>
                            <input type="checkbox" className="custom-checkbox" />
                            <div className="custom-checkbox__wrapper">
                                <span className="custom-checkbox__selector" />
                            </div>
                        </label>
                    </li>
                    <li className="notifications-block__item notifications-block-item">
                        <label className="custom-checkbox__label">
            <span className="notifications-block-item__name">
              New TV shows and movies
            </span>
                            <input
                                type="checkbox"
                                className="custom-checkbox"
                                defaultChecked=""
                            />
                            <div className="custom-checkbox__wrapper">
                                <span className="custom-checkbox__selector" />
                            </div>
                        </label>
                    </li>
                </ul>
            </div>
            <div className="notifications-block">
                <p className="notifications-block__title">Common notification settings</p>
                <ul className="notifications-block__list">
                    <li className="notifications-block__item notifications-block-item">
                        <label className="custom-checkbox__label">
            <span className="notifications-block-item__name">
              Enable / Disable Browser Notifications
            </span>
                            <input
                                type="checkbox"
                                className="custom-checkbox"
                                defaultChecked=""
                            />
                            <div className="custom-checkbox__wrapper">
                                <span className="custom-checkbox__selector" />
                            </div>
                        </label>
                    </li>
                    <li className="notifications-block__item notifications-block-item">
                        <label className="custom-checkbox__label">
            <span className="notifications-block-item__name">
              Receive push notifications in my current browser
            </span>
                            <input type="checkbox" className="custom-checkbox" />
                            <div className="custom-checkbox__wrapper">
                                <span className="custom-checkbox__selector" />
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
