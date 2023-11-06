


import InvertLogo from '../img/invert-logo.svg'


import {useEffect} from "react";



const Footer = () => {


    useEffect(() => {

    }, []);




    return <footer className="site-footer">
        <div className="container">
            <div className="site-footer__row">
                <a href="/" className="site-footer__logo">
                    <img src={InvertLogo} alt="site logo" />
                </a>
                <div className="site-footer__menu site-footer-menu">
                    <h3 className="site-footer-menu__name">
                        Contact support
                    </h3>
                    <ul className="site-footer-menu__list">
                        <li className="site-footer-menu__item">
                            <a href="mailto:support@ororo.tv" className="site-footer-menu__link">
                                support@ororo.tv
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="site-footer__menu site-footer-menu">
                    <h3 className="site-footer-menu__name">
                        FAQ
                    </h3>
                    <ul className="site-footer-menu__list">
                        <li className="site-footer-menu__item">
                            <a href="faq.html" className="site-footer-menu__question">
                                Do you have the rights to the provided content?
                            </a>
                        </li>
                        <li className="site-footer-menu__item">
                            <a href="faq.html" className="site-footer-menu__btn">
                                Show all questions
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="site-footer__menu site-footer-menu">
                    <h3 className="site-footer-menu__name">
                        Terms & Conditions
                    </h3>
                    <ul className="site-footer-menu__list">
                        <li className="site-footer-menu__item">
                            <a href="terms.html" className="site-footer-menu__link">
                                Copyright
                            </a>
                        </li>
                        <li className="site-footer-menu__item">
                            <a href="terms.html" className="site-footer-menu__link">
                                Privacy policy
                            </a>
                        </li>
                        <li className="site-footer-menu__item">
                            <a href="terms.html" className="site-footer-menu__link">
                                Terms of service
                            </a>
                        </li>
                        <li className="site-footer-menu__item">
                            <a href="terms.html" className="site-footer-menu__link">
                                Terms of payment
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
}

export default Footer
