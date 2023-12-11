import InvertLogo from '../img/invert-logo.svg'


import {useEffect, useState} from "react";
import SerialCard from "../components/SerialCard";
import {getCountriesFilter, getFavourites, getGenresFilter, getSerials} from "../api/serials";
import {useLocation} from "react-router-dom";
import Cookies from "js-cookie";
import {useTranslation} from "react-i18next";


const Videos = ({favouriteSerials, userData,setFavouriteSerials,
                    getFavourites}) => {

    const {pathname, location} = useLocation();
    const { t,  i18n} = useTranslation();

    const token = Cookies.get('token');
    const [lang, setLang] = useState()

    const [sortData, setSortData] = useState(['title', 'rating', 'year'])
    const [showSortFilter, setShowSortFilter] = useState('')
    const [sortFilter, setSortFilter] = useState('')


    const [genres, setGenres] = useState([])
    const [showGenresFilter, setShowGenresFilter] = useState('')
    const [genresFilter, setGenresFilter] = useState(t('video.choose_option'))

    const [countries, setCountries] = useState([])
    const [showCountryFilter, setShowCountryFilter] = useState('')
    const [countryFilter, setCountryFilter] = useState(t('video.choose_option'))

    const [channels, setChannels] = useState([])
    const [showChannelFilter, setShowChannelFilter] = useState('')
    const [channelFilter, setChannelFilter] = useState(t('video.choose_option'))

    const [years, setYears] = useState([])
    const [showYearFilter, setShowYearFilter] = useState('')
    const [yearFilter, setYearFilter] = useState(t('video.choose_option'))

    const [serials, setSerials] = useState([])
    const [filteredSerials, setFilteredSerials] = useState([])


    i18n.on('languageChanged', lang => {
        setLang(lang)
    });

    useEffect(() => {
        console.log('token 1', lang)
        setChannelFilter(t('video.choose_option'))
        setCountryFilter(t('video.choose_option'))
        setYearFilter(t('video.choose_option'))
        setGenresFilter(t('video.choose_option'))
    }, [lang]);





    useEffect(() => {
        console.log('token 1', token)
        if (token) {
            getSerials(setSerials, token, sortFilter, genresFilter, countryFilter, channelFilter, yearFilter,'')

        }

    }, [token]);

    useEffect(() => {
            getFavourites(token, setFavouriteSerials)
    }, [pathname]);


    useEffect(() => {
        console.log('serials', serials)
        addFilters()
        setFilteredSerials(serials)

    }, [serials]);

    useEffect(() => {

        getSerials(setSerials, token, sortFilter, genresFilter, countryFilter, channelFilter, yearFilter,'')

    }, [sortFilter, genresFilter, countryFilter, channelFilter, yearFilter,]);

    const addFilters = () => {
        const newGenres = []

        getCountriesFilter(setCountries, token)
        getGenresFilter(setGenres, token)
        serials.map(item => {
            item.networks.filter(network => channels.indexOf(network) === -1 ? channels.push(network) : null)
            if (years.indexOf(item.year) === -1) {
                years.push(item.year)
            }

        })

    }


    return <section className="videos">
        <div className="container">
            <div className="videos__filter filter">
                <div className="filter__header">
                    <div className="filter__title">{t('video.title')}</div>
                    <div className="filter__total">
                        {t('video.total')}: <span>{serials.length} {t('video.video')}</span>
                    </div>
                </div>
                <div className="filter__body">
                    {/*<label className="filter__label">*/}
                    {/*    Sort by*/}
                    {/*    <div onClick={() => setShowSortFilter(!showSortFilter)} className="custom-select ">*/}
                    {/*        <div className={showSortFilter ? 'select-header opened' : 'select-header'}><span*/}
                    {/*            className="selected-option">{sortFilter}</span><i*/}
                    {/*            className="arrow-icon"></i></div>*/}
                    {/*        <ul className={showSortFilter ? 'options-list opened' : 'options-list'}>*/}
                    {/*            <li onClick={() => setSortFilter('Виберіть опцію')}>Виберіть опцію</li>*/}
                    {/*            {sortData.map(item => <li onClick={() => setSortFilter(item)}>{item}</li>)}*/}
                    {/*        </ul>*/}
                    {/*    </div>*/}
                    {/*</label>*/}
                    <label className="filter__label">
                        {t('video.genres')}
                        <div onClick={() => setShowGenresFilter(!showGenresFilter)} className="custom-select ">
                            <div className={showGenresFilter ? 'select-header opened' : 'select-header'}><span
                                className="selected-option">{genresFilter}</span><i
                                className="arrow-icon"></i></div>
                            <ul className={showGenresFilter ? 'options-list opened' : 'options-list'}>
                                <li onClick={() => setGenresFilter(t('video.choose_option'))}>{t('video.choose_option')}</li>
                                {genres.map(item => <li onClick={() => setGenresFilter(item.title)}>{item.title}</li>)}
                            </ul>
                        </div>
                    </label>
                    <label className="filter__label">
                        {t('video.country')}
                        <div onClick={() => setShowCountryFilter(!showCountryFilter)} className="custom-select ">
                            <div className={showCountryFilter ? 'select-header opened' : 'select-header'}><span
                                className="selected-option">{countryFilter}</span><i
                                className="arrow-icon"></i></div>
                            <ul className={showCountryFilter ? 'options-list opened' : 'options-list'}>
                                <li onClick={() => setCountryFilter(t('video.choose_option'))}>{t('video.choose_option')}</li>
                                {countries.map(item => <li
                                    onClick={() => setCountryFilter(item.name)}>{item.name}</li>)}
                            </ul>
                        </div>
                    </label>
                    <label className="filter__label">
                        {t('video.channel')}
                        <div onClick={() => setShowChannelFilter(!showChannelFilter)} className="custom-select ">
                            <div className={showChannelFilter ? 'select-header opened' : 'select-header'}><span
                                className="selected-option">{channelFilter}</span><i
                                className="arrow-icon"></i></div>
                            <ul className={showChannelFilter ? 'options-list opened' : 'options-list'}>
                                <li onClick={() => setChannelFilter(t('video.choose_option'))}>{t('video.choose_option')}</li>
                                {channels.map(item => <li onClick={() => setChannelFilter(item)}>{item}</li>)}
                            </ul>
                        </div>
                    </label>
                    <label className="filter__label">
                        {t('video.year')}
                        <div onClick={() => setShowYearFilter(!showYearFilter)} className="custom-select ">
                            <div className={showYearFilter ? 'select-header opened' : 'select-header'}><span
                                className="selected-option">{yearFilter}</span><i
                                className="arrow-icon"></i></div>
                            <ul className={showYearFilter ? 'options-list opened' : 'options-list'}>
                                <li onClick={() => setYearFilter(t('video.choose_option'))}>{t('video.choose_option')}</li>
                                {years.map(item => <li onClick={() => setYearFilter(item)}>{item}</li>)}

                            </ul>
                        </div>
                    </label>
                </div>
            </div>
            <ul className="videos__list videos-list">
                {filteredSerials && filteredSerials.map(item => {
                    return <SerialCard getSerials={getSerials} setSerials={setSerials} serial={item}
                                       favouriteSerials={favouriteSerials}/>
                })}
            </ul>
        </div>
    </section>
}

export default Videos
