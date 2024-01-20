import {useEffect, useState} from "react";
import {Link, useLocation} from "react-router-dom";

import logo from "../../img/mana-logo.svg";
import {api_url} from "../../utils/utils";
import {getFavourites, getWatched} from "../../api/serials";
import Cookies from "js-cookie";
import {useTranslation} from "react-i18next";

const SerialsModal = ({getFavourites,setFavouriteSerials,favouriteSerials,setWatchedSerials,watchedSerials}) => {
    const { pathname } = useLocation();
    const { t } = useTranslation();
    const [activeTab, setActiveTab] = useState(1)
    // const [favouriteSerials, setFavouriteSerials] = useState([])


    useEffect(() => {
        const token = Cookies.get('token');
        getFavourites(token,setFavouriteSerials)
        getWatched(token, setWatchedSerials)
        // const savedSerials = JSON.parse(localStorage.getItem('favouriteSerials')) || []
        // setFavouriteSerials(savedSerials)
    }, []);



    return <ul className="site-search__list" style={{width: '360px'}}>
        <li className="site-search__item site-search-item">
            <div style={{
                display: 'flex',
                justifyContent: 'space-around',
                alignItems: 'center',
                background: '#F1F1F4',
                height: '52px'
            }}>

                <div onClick={() => setActiveTab(1)}
                     className={activeTab == 1 ? 'favourite_btn active' : 'favourite_btn'}>{t('header.favorites')}
                </div>
                <div onClick={() => setActiveTab(2)}
                     className={activeTab == 2 ? 'favourite_btn active' : 'favourite_btn'}>{t('header.watching')}
                </div>

            </div>
        </li>


        {activeTab === 1 ?
            <>
                <li className="site-search__item site-search-item">
                    <span style={{color: '#999'}}>{t('header.mark_watched')}</span>
                </li>
                {favouriteSerials.map(item => {

                    return <li className="site-search__item site-search-item">
                        <Link to={`/videos/${item.title}`} state={{serialId: item.tv_show.id}} style={{textDecoration: 'none'}} >
                        <div  className="site-search-item__link" style={{gap: 10}}>
                            <img className="site-search-item__img" src={item.tv_show.thumbnail}
                                 style={{borderRadius: 2, width: 22, height: 30, }}
                                 alt="New iron man series"/>
                            <div className={'site-search-item-left'}>
                                <span className="site-search-item__name">{item.tv_show.title}</span>
                                <span style={{color: '#999', fontSize: 14}}>{item.tv_show.year}</span>
                            </div>
                        </div>
                         </Link>
                    </li>
                })}
            </>
            : <>

                {watchedSerials.map(item => {

                    return <li className="site-search__item site-search-item">
                        <Link to={`/videos/${item.title}`} state={{serialId: item.tv_show.id}} style={{textDecoration: 'none'}} >
                            <div  className="site-search-item__link" style={{gap: 10}}>
                                <img className="site-search-item__img" src={item.tv_show.thumbnail}
                                     style={{borderRadius: 2, width: 22, height: 30, }}
                                     alt="New iron man series"/>
                                <div className={'site-search-item-left'}>
                                    <span className="site-search-item__name">{item.tv_show.title}</span>
                                    <span style={{color: '#999', fontSize: 14}}>{item.tv_show.year}</span>
                                </div>
                            </div>
                        </Link>
                    </li>
                })}
            </>


        }
    </ul>

}

export default SerialsModal
