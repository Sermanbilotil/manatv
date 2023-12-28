


import InvertLogo from '../img/invert-logo.svg'


import {useEffect} from "react";
import {Link} from "react-router-dom";


import {
    matchPath,
    useLocation
} from "react-router-dom";
import {useTranslation} from "react-i18next";

const TermsHeader = () => {
    const { pathname } = useLocation();
    const { t } = useTranslation();
    useEffect(() => {

    }, []);




    return   <header className="common-header">
        <div className="container">
            <ul className="common-header__list">
                <li className="common-header__item">
                    <Link to="/terms" className={pathname === '/terms' ?  'common-header__link active' : 'common-header__link'}>
                        <span className="common-header__name">{t('copyright.copyright')}</span>
                    </Link>
                </li>
                <li className="common-header__item">
                    <Link to="/policy" className={pathname === '/policy' ?  'common-header__link active' : 'common-header__link'} style={{width: 250}}>
                        <span className="common-header__name">{t('terms_conditions.privacy_title')}</span>
                    </Link>
                </li>
                {/*<li className="common-header__item">*/}
                {/*    <a href="#" className="common-header__link">*/}
                {/*        <span className="common-header__name">Terms of service</span>*/}
                {/*    </a>*/}
                {/*</li>*/}
                {/*<li className="common-header__item">*/}
                {/*    <a href="#" className="common-header__link">*/}
                {/*        <span className="common-header__name">Terms of payment</span>*/}
                {/*    </a>*/}
                {/*</li>*/}
            </ul>
        </div>
    </header>
}

export default TermsHeader
