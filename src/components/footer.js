


import InvertLogo from '../img/invert-logo.svg'


import {useEffect} from "react";
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";



const Footer = () => {
    const { t } = useTranslation();


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
                        {t('main_page.contact_support')}
                    </h3>
                    <ul className="site-footer-menu__list">
                        <li className="site-footer-menu__item">
                            <a href="mailto:support@ororo.tv" className="site-footer-menu__link">
                                support@manamana.tv
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="site-footer__menu site-footer-menu">
                    <h3 className="site-footer-menu__name">
                        {t('main_page.faq')}
                    </h3>
                    <ul className="site-footer-menu__list">
                        <li className="site-footer-menu__item">
                            <Link to="/faq" className="site-footer-menu__question">
                                {t('faq.content_title')}
                            </Link>
                        </li>
                        <li className="site-footer-menu__item">
                            <Link to="/faq" className="site-footer-menu__btn">
                                {t('main_page.show_all_questions')}
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="site-footer__menu site-footer-menu">
                    <h3 className="site-footer-menu__name">
                        {t('main_page.terms')}
                    </h3>
                    <ul className="site-footer-menu__list">
                        <li className="site-footer-menu__item">
                            <Link to="/terms" className="site-footer-menu__link">
                                {t('copyright.copyright')}
                            </Link>
                        </li>
                        <li className="site-footer-menu__item">
                            <Link to="/policy" className="site-footer-menu__link">
                                {t('terms_conditions.privacy_title')}
                            </Link>
                        </li>

                    </ul>
                </div>
            </div>
        </div>
    </footer>
}

export default Footer
