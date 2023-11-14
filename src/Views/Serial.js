
import {useEffect, useState} from "react";
import SerialCard from "../components/SerialCard";
import {getSerialData, getSerials} from "../api/serials";
import {useLocation} from "react-router-dom";

import { Spinner } from "react-activity";
import "react-activity/dist/library.css";
import Series from "../components/series";

const Serial = ({serial}) => {
    const location = useLocation();
    const { serialId } = location.state;



    const [serialData, setSerialData] = useState([])
    const [activeSeason, setActiveSeason] = useState({})


    useEffect(() => {

        getSerialData(serialId, setSerialData)

    }, []);

    useEffect(() => {
       if(serialData.tv_show_seasons) {

           setActiveSeason(serialData.tv_show_seasons[0])
       }

    }, [serialData]);


        if(serialData.length === 0 ) {
            return  <div style={{display: 'flex',alignItems: 'center', justifyContent: 'center', width: '100%',minHeight: '75vh'}}>
                        <Spinner />
                </div>

        }


    return <section className="video">
        <div className="container container--sm">
            <div className="video__row">
                <div className="video__sidebar">
                    <img src={serialData.thumbnail} alt="name"/>
                    <div className="video__btns">
                        <button onClick={() => window.open(serialData.trailer)} className="btn btn--transparent-new video__btn video--trailer">
                            Trailer
                        </button>
                        <button className="btn btn--transparent-new video__btn video--fav">
                            Add to:
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    fill="#fff"
                                    d="M20.775 5.473a5.256 5.256 0 0 0-7.417-.007L12 6.729l-1.357-1.263a5.25 5.25 0 0 0-7.42 7.43l8.377 8.499a.563.563 0 0 0 .8 0l8.375-8.496a5.251 5.251 0 0 0 0-7.426Zm-.799 6.633L12 20.198l-7.979-8.095a4.125 4.125 0 0 1 5.848-5.82l1.748 1.627a.562.562 0 0 0 .766 0l1.748-1.629a4.126 4.126 0 1 1 5.845 5.824Z"
                                />
                            </svg>
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
                            Rating: <b>{serialData.rating}</b>
                        </div>
                        <div className="video-main__row">
                            Release year:{" "}
                            <a href="#" className="video-main__link">
                                {serialData.year}
                            </a>
                        </div>
                        <div className="video-main__row">
                            Genres:{" "}
                            <a href="#" className="video-main__link">
                                {serialData?.genres.map(item => item + ', ')}
                            </a>
                        </div>
                        <div className="video-main__row">
                            Countries:{" "}
                            <a href="#" className="video-main__link">
                                United States
                            </a>
                        </div>
                        <div className="video-main__row">Duration: {serialData.duration}</div>
                        <div className="video-main__row">Status: Returning Series</div>
                    </div>
                    <div className="video-table">
                        <div className="video-table__tabs">
                            {serialData.tv_show_seasons.map(season => {

                                return <button
                                    className={activeSeason.season_number === season.season_number ? 'video-table__tab active' : 'video-table__tab'}
                                    onClick={() => setActiveSeason(season)}
                                >
                                    {season.season_number} Season
                                </button>
                            })}
                        </div>
                        <div className="video-table__seasons">
                            <div id="season-1" className="season activetab">
                                <ul className="season-list">
                                    {activeSeason.season_series && activeSeason.season_series.map(series => {
                                            console.log('trk', series)

                                        return <Series series={series} />
                                    })}
                                </ul>
                            </div>
                        </div>

                    </div>
                    <div className="video__future video-future">
                        <h3 className="video-future__title">Next series:</h3>
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
    </section>

}

export default Serial
