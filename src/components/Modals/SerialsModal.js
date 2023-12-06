import {useEffect, useState} from "react";
import {Link, useLocation} from "react-router-dom";

import logo from "../../img/mana-logo.svg";
import {api_url} from "../../utils/utils";
import {getFavourites} from "../../api/serials";
import Cookies from "js-cookie";

const SerialsModal = ({getFavourites,setFavouriteSerials,favouriteSerials,}) => {
    const { pathname } = useLocation();
    const [activeTab, setActiveTab] = useState(1)
    // const [favouriteSerials, setFavouriteSerials] = useState([])


    useEffect(() => {
        const token = Cookies.get('token');
        getFavourites(token,setFavouriteSerials)
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
                     className={activeTab == 1 ? 'favourite_btn active' : 'favourite_btn'}>Favorites
                </div>
                <div onClick={() => setActiveTab(2)}
                     className={activeTab == 2 ? 'favourite_btn active' : 'favourite_btn'}>I'm Watching
                </div>

            </div>
        </li>


        {activeTab === 1 ?
            <>
                <li className="site-search__item site-search-item">
                    <span style={{color: '#999'}}>Mark all watched</span>
                </li>
                {favouriteSerials.map(item => {

                    return <li className="site-search__item site-search-item">
                        <Link to={`/videos/${item.title}`} state={{serialId: item.tv_show.id}} style={{textDecoration: 'none'}} >
                        <div  className="site-search-item__link">
                            <img className="site-search-item__img" src={api_url.replace(/.$/,".") + item.tv_show.thumbnail}
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

                <li className="site-search__item site-search-item">
                    <a href="video.html" className="site-search-item__link">
                        {/*<img className="site-search-item__img" src={logo}*/}
                        {/*     alt="New iron man series"/>*/}
                        {/*<span className="site-search-item__name">New iron man series</span>*/}
                    </a>
                </li>
            </>


        }
    </ul>

}

export default SerialsModal
