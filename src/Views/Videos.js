


import InvertLogo from '../img/invert-logo.svg'


import {useEffect, useState} from "react";
import SerialCard from "../components/SerialCard";
import {getSerials} from "../api/serials";
import {useLocation} from "react-router-dom";
import Cookies from "js-cookie";





const Videos = () => {
    const location = useLocation();
    const token = Cookies.get('token');

    const [sortData, setSortData] = useState(['title', 'rating', 'year'])
    const [showSortFilter, setShowSortFilter] = useState('')
    const [sortFilter, setSortFilter] = useState('Виберіть опцію')

    const [genres, setGenres] = useState([])
    const [showGenresFilter, setShowGenresFilter] = useState('')
    const [genresFilter, setGenresFilter] = useState('Виберіть опцію')

    const [countries, setCountries] = useState([])
    const [showCountryFilter, setShowCountryFilter] = useState('')
    const [countryFilter, setCountryFilter] = useState('Виберіть опцію')

    const [channels, setChannels] = useState([])
    const [showChannelFilter, setShowChannelFilter] = useState('')
    const [channelFilter, setChannelFilter] = useState('Виберіть опцію')

    const [years, setYears] = useState([])
    const [showYearFilter, setShowYearFilter] = useState('')
    const [yearFilter, setYearFilter] = useState('Виберіть опцію')

    const [serials, setSerials] = useState([])
    const [filteredSerials, setFilteredSerials] = useState([])


    useEffect(() => {
            console.log('token 1', token)
        if(token) {
            getSerials(setSerials, token,sortFilter,genresFilter,countryFilter,channelFilter,yearFilter)
        }

    }, [token]);


    useEffect(() => {
        console.log('serials', serials)
        addFilters()
        setFilteredSerials(serials)

    }, [serials]);

    useEffect(() => {

            getSerials(setSerials, token, sortFilter,genresFilter,countryFilter,channelFilter,yearFilter)

    }, [sortFilter,genresFilter,countryFilter,channelFilter,yearFilter]);

    const addFilters = () => {
        const newGenres = []
        serials.map(item => {
            item.genres.filter(genre => genres.indexOf(genre) === -1 ? genres.push(genre) : null)
            item.countries.filter(country => countries.indexOf(country) === -1 ? countries.push(country) : null)
            item.networks.filter(network => channels.indexOf(network) === -1 ? channels.push(network) : null)
            if(years.indexOf(item.year) === -1) {
                years.push(item.year)
            }

        })

    }


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
                                <li onClick={() => setSortFilter('Виберіть опцію')}>Виберіть опцію</li>
                                {sortData.map(item => <li onClick={() => setSortFilter(item)}>{item}</li>)}
                            </ul>
                        </div>
                    </label>
                    <label className="filter__label">
                        Genres
                        <div onClick={() => setShowGenresFilter(!showGenresFilter)} className="custom-select ">
                            <div className={showGenresFilter ? 'select-header opened' : 'select-header'}><span className="selected-option">{genresFilter}</span><i
                                className="arrow-icon"></i></div>
                            <ul className={showGenresFilter ? 'options-list opened' : 'options-list'}>
                                <li onClick={() => setGenresFilter('Виберіть опцію')}>Виберіть опцію</li>
                                {genres.map(item => <li onClick={() => setGenresFilter(item)}>{item}</li>)}
                            </ul>
                        </div>
                    </label>
                    <label className="filter__label">
                        Country
                        <div onClick={() => setShowCountryFilter(!showCountryFilter)} className="custom-select ">
                            <div className={showCountryFilter ? 'select-header opened' : 'select-header'}><span className="selected-option">{countryFilter}</span><i
                                className="arrow-icon"></i></div>
                            <ul className={showCountryFilter ? 'options-list opened' : 'options-list'}>
                                <li onClick={() => setCountryFilter('Виберіть опцію')}>Виберіть опцію</li>
                                {countries.map(item => <li onClick={() => setCountryFilter(item)}>{item}</li>)}
                            </ul>
                        </div>
                    </label>
                    <label className="filter__label">
                        Channel/Studio
                        <div onClick={() => setShowChannelFilter(!showChannelFilter)} className="custom-select ">
                            <div className={showChannelFilter ? 'select-header opened' : 'select-header'}><span className="selected-option">{channelFilter}</span><i
                                className="arrow-icon"></i></div>
                            <ul className={showChannelFilter ? 'options-list opened' : 'options-list'}>
                                <li onClick={() => setChannelFilter('Виберіть опцію')}>Виберіть опцію</li>
                                {channels.map(item => <li onClick={() => setChannelFilter(item)}>{item}</li>)}
                            </ul>
                        </div>
                    </label>
                    <label className="filter__label">
                        Year
                        <div onClick={() => setShowYearFilter(!showYearFilter)} className="custom-select ">
                            <div className={showYearFilter ? 'select-header opened' : 'select-header'}><span className="selected-option">{yearFilter}</span><i
                                className="arrow-icon"></i></div>
                            <ul className={showYearFilter ? 'options-list opened' : 'options-list'}>
                                <li onClick={() => setYearFilter('Виберіть опцію')}>Виберіть опцію</li>
                                {years.map(item => <li onClick={() => setYearFilter(item)}>{item}</li>)}

                            </ul>
                        </div>
                    </label>
                </div>
            </div>
            <ul className="videos__list videos-list">
                {filteredSerials && filteredSerials.map(item => {
                    return <SerialCard serial={item} />
                })}
            </ul>
        </div>
    </section>
}

export default Videos
