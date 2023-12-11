
import {useEffect} from "react";
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";



const NotificationsModal = () => {
    const { t } = useTranslation();

    useEffect(() => {

    }, []);




    return   <ul className="site-search__list site_notification_list" >

        <li className="site-search__item site-search-item" style={{textAlign: 'center'}}>
            <span style={{color: '#7E7E7E', fontSize: 14,}}>{t('notifications.warn')}</span>
        </li>
        {/*<li className="site-search__item site-search-item">*/}
        {/*    <a href="video.html" className="site-search-item__link">*/}
        {/*       <h3>New films🎞️</h3>*/}
        {/*        <span className="site-search-item__name">*/}
        {/*            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore*/}
        {/*        </span>*/}
        {/*        <span>12.12.2023</span>*/}
        {/*    </a>*/}
        {/*</li>*/}
        {/*<li className="site-search__item site-search-item">*/}
        {/*    <a href="video.html" className="site-search-item__link">*/}
        {/*        <img className="site-search-item__img" src="../img/film-icon.png"*/}
        {/*             alt="New iron man series"/>*/}
        {/*        <span className="site-search-item__name">New iron man series</span>*/}
        {/*    </a>*/}
        {/*</li>*/}
        {/*<li className="site-search__item site-search-item">*/}
        {/*    <a href="video.html" className="site-search-item__link">*/}
        {/*        <img className="site-search-item__img" src="../img/film-icon.png"*/}
        {/*             alt="New iron man series"/>*/}
        {/*        <span className="site-search-item__name">New iron man series</span>*/}
        {/*    </a>*/}
        {/*</li>*/}
    </ul>
}

export default NotificationsModal
