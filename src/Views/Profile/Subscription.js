

import {useEffect} from "react";
import SubHeader from "../../components/SubHeader";



const Subscription = () => {


    useEffect(() => {

    }, []);




    return <>
        <SubHeader />
    <section className="subscriptions">
        <div className="container">
            <ul className="subscriptions-list">
                <li className="subscriptions-list__item subscriptions-list-item">
                    <a
                        href="#"
                        className="subscriptions-list-item__link subscriptions-list-item__link--active"
                    >
                        <p className="subscriptions-list-item__period">1 month</p>
                        <p className="subscriptions-list-item__price">6 €</p>
                        <ul className="subscriptions-list-item__list">
                            <li className="subscriptions-list-item__point">
                                Access to all content
                            </li>
                            <li className="subscriptions-list-item__point">
                                Ability to download videos with subtitles
                            </li>
                            <li className="subscriptions-list-item__point">
                                Access to all content
                            </li>
                            <li className="subscriptions-list-item__point">
                                Access to all content
                            </li>
                        </ul>
                        <span className="btn btn--transparent subscriptions-list-item__btn">
            Choose
          </span>
                    </a>
                    <div className="subscriptions-list-item__active subscriptions-list-item-active">
                        <p className="subscriptions-list-item-active__title">Your rate</p>
                        <p className="subscriptions-list-item-active__item">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 16 16"
                            >
                                <path
                                    fill="#111"
                                    d="M13 2.125h-1.625V1.5a.375.375 0 1 0-.75 0v.625h-5.25V1.5a.375.375 0 0 0-.75 0v.625H3A.875.875 0 0 0 2.125 3v10a.875.875 0 0 0 .875.875h10a.875.875 0 0 0 .875-.875V3A.875.875 0 0 0 13 2.125Zm-10 .75h1.625V3.5a.375.375 0 0 0 .75 0v-.625h5.25V3.5a.375.375 0 1 0 .75 0v-.625H13a.125.125 0 0 1 .125.125v2.125H2.875V3A.125.125 0 0 1 3 2.875Zm10 10.25H3A.125.125 0 0 1 2.875 13V5.875h10.25V13a.125.125 0 0 1-.125.125Z"
                                />
                            </svg>
                            Till 06 Sep 20
                        </p>
                        <p className="subscriptions-list-item-active__item">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 16 16"
                            >
                                <path
                                    fill="#111"
                                    d="M8 10.375a2.375 2.375 0 1 0 0-4.75 2.375 2.375 0 0 0 0 4.75Zm0-4a1.625 1.625 0 1 1 0 3.25 1.625 1.625 0 0 1 0-3.25Zm7-2.75H1A.375.375 0 0 0 .625 4v8a.375.375 0 0 0 .375.375h14a.375.375 0 0 0 .375-.375V4A.375.375 0 0 0 15 3.625ZM1.375 6.801a3.42 3.42 0 0 0 2.426-2.426H12.2a3.421 3.421 0 0 0 2.426 2.426V9.2a3.42 3.42 0 0 0-2.426 2.426H3.8a3.42 3.42 0 0 0-2.426-2.426V6.8Zm13.25-.783a2.675 2.675 0 0 1-1.643-1.643h1.643v1.643ZM3.018 4.375a2.675 2.675 0 0 1-1.643 1.643V4.375h1.643ZM1.375 9.982a2.675 2.675 0 0 1 1.643 1.643H1.375V9.982Zm11.607 1.643a2.675 2.675 0 0 1 1.643-1.643v1.643h-1.643Z"
                                />
                            </svg>
                            6.0 EUR
                        </p>
                        <p className="subscriptions-list-item-active__item">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 16 16"
                            >
                                <path
                                    fill="#111"
                                    d="M14 3.125H2A.875.875 0 0 0 1.125 4v8a.875.875 0 0 0 .875.875h12a.875.875 0 0 0 .875-.875V4A.875.875 0 0 0 14 3.125Zm-12 .75h12a.125.125 0 0 1 .125.125v1.625H1.875V4A.125.125 0 0 1 2 3.875Zm12 8.25H2A.125.125 0 0 1 1.875 12V6.375h12.25V12a.125.125 0 0 1-.125.125ZM12.875 10.5a.375.375 0 0 1-.375.375h-2a.375.375 0 0 1 0-.75h2a.375.375 0 0 1 .375.375Zm-4 0a.375.375 0 0 1-.375.375h-1a.375.375 0 1 1 0-.75h1a.375.375 0 0 1 .375.375Z"
                                />
                            </svg>
                            via Crypto
                        </p>
                    </div>
                </li>
                <li className="subscriptions-list__item subscriptions-list-item">
                    <a href="#" className="subscriptions-list-item__link">
                        <p className="subscriptions-list-item__period">1 month</p>
                        <p className="subscriptions-list-item__price">
                            6 €
                            <span className="subscriptions-list-item__discount">
              18 € 11% discount
            </span>
                        </p>
                        <ul className="subscriptions-list-item__list">
                            <li className="subscriptions-list-item__point">
                                Access to all content
                            </li>
                            <li className="subscriptions-list-item__point">
                                Ability to download videos with subtitles
                            </li>
                            <li className="subscriptions-list-item__point">
                                Access to all content
                            </li>
                            <li className="subscriptions-list-item__point">
                                Access to all content
                            </li>
                        </ul>
                        <span className="btn btn--transparent subscriptions-list-item__btn">
            Choose
          </span>
                    </a>
                </li>
                <li className="subscriptions-list__item subscriptions-list-item">
                    <a href="#" className="subscriptions-list-item__link">
                        <p className="subscriptions-list-item__period">1 month</p>
                        <p className="subscriptions-list-item__price">
                            6 €
                            <span className="subscriptions-list-item__discount">
              18 € 11% discount
            </span>
                        </p>
                        <ul className="subscriptions-list-item__list">
                            <li className="subscriptions-list-item__point">
                                Access to all content
                            </li>
                            <li className="subscriptions-list-item__point">
                                Ability to download videos with subtitles
                            </li>
                            <li className="subscriptions-list-item__point">
                                Access to all content
                            </li>
                            <li className="subscriptions-list-item__point">
                                Access to all content
                            </li>
                        </ul>
                        <span className="btn btn--transparent subscriptions-list-item__btn">
            Choose
          </span>
                    </a>
                </li>
                <li className="subscriptions-list__item subscriptions-list-item">
                    <a href="#" className="subscriptions-list-item__link">
                        <p className="subscriptions-list-item__period">1 month</p>
                        <p className="subscriptions-list-item__price">
                            6 €
                            <span className="subscriptions-list-item__discount">
              18 € 11% discount
            </span>
                        </p>
                        <ul className="subscriptions-list-item__list">
                            <li className="subscriptions-list-item__point">
                                Access to all content
                            </li>
                            <li className="subscriptions-list-item__point">
                                Ability to download videos with subtitles
                            </li>
                            <li className="subscriptions-list-item__point">
                                Access to all content
                            </li>
                            <li className="subscriptions-list-item__point">
                                Access to all content
                            </li>
                        </ul>
                        <span className="btn btn--transparent subscriptions-list-item__btn">
            Choose
          </span>
                    </a>
                </li>
            </ul>
        </div>
    </section>
    </>

}

export default Subscription
