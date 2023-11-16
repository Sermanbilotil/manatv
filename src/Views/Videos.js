


import InvertLogo from '../img/invert-logo.svg'


import {useEffect, useState} from "react";
import SerialCard from "../components/SerialCard";
import {getSerials} from "../api/serials";
import {useLocation} from "react-router-dom";
import Cookies from "js-cookie";





const Videos = () => {
    const location = useLocation();
    const token = Cookies.get('token');

    const [showSortFilter, setShowSortFilter] = useState('')
    const [sortFilter, setSortFilter] = useState('Виберіть опцію')
    const [showGenresFilter, setShowGenresFilter] = useState('')
    const [genresFilter, setGenresFilter] = useState('Виберіть опцію')
    const [showCountryFilter, setShowCountryFilter] = useState('')
    const [countryFilter, setCountryFilter] = useState('Виберіть опцію')
    const [showChannelFilter, setShowChannelFilter] = useState('')
    const [channelFilter, setChannelFilter] = useState('Виберіть опцію')
    const [showYearFilter, setShowYearFilter] = useState('')
    const [yearFilter, setYearFilter] = useState('Виберіть опцію')

    const [serials, setSerials] = useState([])


    useEffect(() => {
            console.log('token 1', token)
        if(token) {
            getSerials(setSerials, token)
        }

    }, [token]);




    return <section className="videos">
        <div className="container">
            <div className="videos__filter filter">
                <div className="filter__header">
                    <div className="filter__title">Choose video</div>
                    <div className="filter__total">
                        Total: <span>3049 Video</span>
                    </div>
                </div>
                <div className="filter__body">
                    <label className="filter__label">
                        Sort by
                        <div onClick={() => setShowSortFilter(!showSortFilter)} className="custom-select ">
                            <div className={showSortFilter ? 'select-header opened' : 'select-header'}><span className="selected-option">{sortFilter}</span><i
                                className="arrow-icon"></i></div>
                            <ul className={showSortFilter ? 'options-list opened' : 'options-list'}>
                                <li onClick={() => setSortFilter()}>Placeholder</li>
                                <li onClick={() => setSortFilter()}>Placeholder</li>
                                <li onClick={() => setSortFilter()}>Placeholder</li>
                            </ul>
                        </div>
                    </label>
                    <label className="filter__label">
                        Genres
                        <div onClick={() => setShowGenresFilter(!showGenresFilter)} className="custom-select ">
                            <div className={showGenresFilter ? 'select-header opened' : 'select-header'}><span className="selected-option">{genresFilter}</span><i
                                className="arrow-icon"></i></div>
                            <ul className={showGenresFilter ? 'options-list opened' : 'options-list'}>
                                <li onClick={() => setGenresFilter()}>Placeholder</li>
                                <li onClick={() => setGenresFilter()}>Placeholder</li>
                                <li onClick={() => setGenresFilter()}>Placeholder</li>
                            </ul>
                        </div>
                    </label>
                    <label className="filter__label">
                        Country
                        <div onClick={() => setShowCountryFilter(!showCountryFilter)} className="custom-select ">
                            <div className={showCountryFilter ? 'select-header opened' : 'select-header'}><span className="selected-option">{countryFilter}</span><i
                                className="arrow-icon"></i></div>
                            <ul className={showCountryFilter ? 'options-list opened' : 'options-list'}>
                                <li onClick={() => setCountryFilter()}>Placeholder</li>
                                <li onClick={() => setCountryFilter()}>Placeholder</li>
                                <li onClick={() => setCountryFilter()}>Placeholder</li>
                            </ul>
                        </div>
                    </label>
                    <label className="filter__label">
                        Channel/Studio
                        <div onClick={() => setShowChannelFilter(!showChannelFilter)} className="custom-select ">
                            <div className={showChannelFilter ? 'select-header opened' : 'select-header'}><span className="selected-option">{channelFilter}</span><i
                                className="arrow-icon"></i></div>
                            <ul className={showChannelFilter ? 'options-list opened' : 'options-list'}>
                                <li onClick={() => setChannelFilter()}>Placeholder</li>
                                <li onClick={() => setChannelFilter()}>Placeholder</li>
                                <li onClick={() => setChannelFilter()}>Placeholder</li>
                            </ul>
                        </div>
                    </label>
                    <label className="filter__label">
                        Year
                        <div onClick={() => setShowYearFilter(!showYearFilter)} className="custom-select ">
                            <div className={showYearFilter ? 'select-header opened' : 'select-header'}><span className="selected-option">{yearFilter}</span><i
                                className="arrow-icon"></i></div>
                            <ul className={showYearFilter ? 'options-list opened' : 'options-list'}>
                                <li onClick={() => setYearFilter('2021')}>2021</li>
                                <li onClick={() => setYearFilter('2022')}>2022</li>
                                <li onClick={() => setYearFilter('2023')}>2023</li>
                            </ul>
                        </div>
                    </label>
                </div>
            </div>
            <ul className="videos__list videos-list">
                {serials && serials.map(item => {
                    return <SerialCard serial={item} />
                })}
            </ul>
        </div>
    </section>
}

export default Videos
