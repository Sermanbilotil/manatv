import {useEffect, useState} from "react";
import SerialCard from "../components/SerialCard";
import {addToFavourites, getSerialData, addToWatched} from "../api/serials";
import {useLocation, useNavigate, useNavigation} from "react-router-dom";

import {Spinner} from "react-activity";
import "react-activity/dist/library.css";
import Series from "../components/series";
import Cookies from "js-cookie";
import {useTranslation} from "react-i18next";
import {VideoPlayer} from "../components/video-player/VideoPlayer";
import Modal from 'react-modal';

const Serial = ({}) => {
    const location = useLocation();
    const {t} = useTranslation();


    const token = Cookies.get('token');

    const { favouriteSerials, currentInFavouriteId,} = location.state !== null;

    const serialId = window.location.pathname.split('/').slice(-1)[0]
    console.log('serialId',window.location.pathname.split('/').slice(-1)[0] )

    const [inFavourite, setInFavourite] = useState(false)
    const [inFavouriteId, setInFavouriteId] = useState(null)

    const [serialData, setSerialData] = useState([])
    const [activeSeason, setActiveSeason] = useState({})
    const [series, setSeries] = useState(0)

    const [modalIsOpen, setModalIsOpen] = useState(false);


    const customStyles = {
        content: {
            top: '0',
            left: '0',
            width: '100vw',
            height: '100vh',
            padding: 0,
            border: 'none',
            borderRadius: 0,
            overflow: 'hidden',
            zIndex: 6,
            backgroundColor: '#000',
            alignItems: 'center',
            justifyContent: 'center',
            display: 'flex',
        },
        overlay: {zIndex: 6 }
    };

    useEffect(() => {

        getSerialData(serialId, setSerialData, token)

    }, []);

    useEffect(() => {
        const hash = location.hash
        const currentSerial = hash.split('#').slice(-1)[0].split('-')

        console.log('location',currentSerial)
        if(serialData.tv_show_seasons && hash.length > 0) {
            setActiveSeason(serialData.tv_show_seasons[currentSerial[0] - 1])
            setSeries(currentSerial[1])
            setModalIsOpen(true)
        }


    }, [serialData]);



    useEffect(() => {

        if(series === 0) {
            setModalIsOpen(false)
        } else {
            setModalIsOpen(true)
            window.location.href = location.pathname + '#' + '1-1'
            addToWatched(serialId)
        }
    }, [series]);



    useEffect(() => {
        getSerialData(serialId, setSerialData, token)
    }, [serialId]);

    useEffect(() => {
        setInFavouriteId(currentInFavouriteId)
    }, [currentInFavouriteId]);


    useEffect(() => {
        if (serialData.tv_show_seasons) {
            setActiveSeason(serialData.tv_show_seasons[0])
        }

        const objectExists = checkIfFavourite()
        if (objectExists) {
            setInFavourite(true)
        }


    }, [serialData, favouriteSerials]);

    const checkIfFavourite = () => {
        const savedSerials = favouriteSerials || []

        const existing = savedSerials.some(obj => {

            const isFavourite = obj.tv_show.id === serialData.id

            if (isFavourite && !currentInFavouriteId) {
                setInFavouriteId(obj.id)
            }
            return isFavourite;
        });

        return existing

    }


    if (serialData.length === 0) {
        return <div
            style={{display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', minHeight: '75vh'}}>
            <Spinner/>
        </div>

    }
    const showVideoModal = () => {
        setSeries(0)
        setModalIsOpen(false)

    }


    return <section className="video">

        <div className="container container--sm">
            <div className="video__row">
                <div className="video__sidebar">
                    <img src={serialData.thumbnail} alt="name"/>
                    <div className="video__btns">
                        <button onClick={() => window.open(serialData.trailer)}
                                className="btn btn--transparent-new video__btn video--trailer">
                            {t('serial.trailer')}
                        </button>
                        <button className="btn btn--transparent-new video__btn video--fav">
                            {t('serial.add_to')}
                            <div
                                onClick={(e) => addToFavourites(e, serialData, setInFavourite, token, inFavourite, inFavouriteId, setInFavouriteId)}
                                className="videos-list-item__fav">
                                {inFavourite ?
                                    <svg width="24" height="24" viewBox="0 0 32 32" fill="red"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M29.9998 12.25C30.002 13.2023 29.8153 14.1456 29.4505 15.0253C29.0858 15.9049 28.5502 16.7036 27.8748 17.375L16.7123 28.7025C16.6193 28.797 16.5084 28.872 16.386 28.9232C16.2637 28.9744 16.1324 29.0008 15.9998 29.0008C15.8672 29.0008 15.7359 28.9744 15.6136 28.9232C15.4913 28.872 15.3804 28.797 15.2873 28.7025L4.12482 17.375C2.76393 16.0157 1.99873 14.1716 1.99756 12.2481C1.99639 10.3247 2.75934 8.47961 4.11857 7.11872C5.47781 5.75783 7.32199 4.99263 9.24541 4.99146C11.1688 4.99028 13.0139 5.75324 14.3748 7.11247L15.9998 8.63122L17.6361 7.10747C18.6516 6.09696 19.9438 5.40998 21.3495 5.13326C22.7552 4.85654 24.2113 5.00249 25.5341 5.55269C26.8569 6.10288 27.987 7.03265 28.7818 8.22462C29.5766 9.41659 30.0005 10.8173 29.9998 12.25Z"
                                            fill="red"/>
                                    </svg>
                                    : <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            fill="#fff"
                                            d="M20.775 5.473a5.256 5.256 0 0 0-7.417-.007L12 6.729l-1.357-1.263a5.25 5.25 0 0 0-7.42 7.43l8.377 8.499a.563.563 0 0 0 .8 0l8.375-8.496a5.251 5.251 0 0 0 0-7.426Zm-.799 6.633L12 20.198l-7.979-8.095a4.125 4.125 0 0 1 5.848-5.82l1.748 1.627a.562.562 0 0 0 .766 0l1.748-1.629a4.126 4.126 0 1 1 5.845 5.824Z"
                                        />
                                    </svg>

                                }

                            </div>
                        </button>
                    </div>
                </div>
                <div className="video__info">
                    <h1 className="video__name">{serialData.title}</h1>
                    <div className="video__description">
                        <p>
                            {serialData.description}
                        </p>
                    </div>
                    <div className="video__main video-main">
                        <div className="video-main__row">
                            {t('serial.rating')}: <b>{serialData.rating}</b>
                        </div>
                        <div className="video-main__row">
                            {t('serial.year')}:{" "}
                            <a href="#" className="video-main__link">
                                {serialData.year}
                            </a>
                        </div>
                        <div className="video-main__row">
                            {t('serial.genres')}:{" "}
                            <a href="#" className="video-main__link">
                                {serialData?.genres.map(item => item + ', ')}
                            </a>
                        </div>
                        <div className="video-main__row">
                            {t('serial.countries')}:{" "}
                            <a href="#" className="video-main__link">
                                {serialData?.countries.map(item => item + ', ')}
                            </a>
                        </div>
                        <div className="video-main__row"> {t('serial.duration')}: {serialData.duration}</div>
                        <div className="video-main__row"> {t('serial.status')}: Returning Series</div>
                    </div>
                    <div className="video-table">
                        <div className="video-table__tabs">
                            {serialData.tv_show_seasons.map(season => {

                                return <button
                                    className={activeSeason.season_number === season.season_number ? 'video-table__tab active' : 'video-table__tab'}
                                    onClick={() => setActiveSeason(season)}
                                >
                                    {season.season_number} {t('serial.season')}
                                </button>
                            })}
                        </div>


                        <div className="video-table__seasons">
                            <div id="season-1" className="season activetab">
                                <ul className="season-list">
                                    {activeSeason.season_series && activeSeason.season_series.map(episode => {

                                        return <>
                                            <Series episode={episode} series={series} setSeries={setSeries}/>
                                        </>
                                    })}
                                </ul>

                            </div>
                        </div>

                        {/*{series !== 0 &&  <div>*/}
                        {/*        <VideoPlayer episodes={activeSeason.season_series}*/}
                        {/*                     series={series}*/}
                        {/*                     setSeries={setSeries}*/}
                        {/*                     id={5}*/}
                        {/*        />*/}
                        {/*    </div>*/}
                        {/*}*/}


                    </div>
                    <div className="video__future video-future">
                        <h3 className="video-future__title"> {t('serial.next_series')}:</h3>
                        <p className="video-future__text">
                            №6 "Comply Slowly" premieres on July 26, 2023
                        </p>
                        <p className="video-future__text">
                            №7 "Brace Brace Brace" premieres on August 02, 2023
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <Modal
            ariaHideApp={false}
            isOpen={modalIsOpen}
            onRequestClose={setModalIsOpen}
            style={customStyles}
            contentLabel="Example Modal"
        >
            <div id="video-close-button" onClick={() => showVideoModal()}></div>

                <VideoPlayer
                    serialData={serialData}
                    setActiveSeason={setActiveSeason}
                    activeSeason={activeSeason}
                    episodes={activeSeason.season_series}
                    series={series}
                    setSeries={setSeries}
                    id={5}
                />

        </Modal>
    </section>

}

    export default Serial
