


import InvertLogo from '../img/invert-logo.svg'


import {useEffect, useState} from "react";



const Series = ({series}) => {

    const [showDescription, setShowDescription]  = useState(false)
    useEffect(() => {

    }, []);




    return <li className="season-list__item season-list-item">
        <span className="season-list-item__number">1</span>
        <div className="season-list-item__content">
            <button className="season-list-item__name video-open">
                {series.title}
            </button>
            <div className={showDescription ? 'season-list-item__description opened' : 'season-list-item__description'}>
                <p>
                    {series.description}
                </p>
            </div>
            <button
                className="season-list-item__more"
                onClick={() => setShowDescription(!showDescription)}
            >
                show description
            </button>
        </div>
        <div className="season-list-item__info">
            <div className="season-list-item__flags">

                {series.episode_subtitles.map(item => {

                    return    <img src={item.subtitles_file} alt="Country"/>
                })}

            </div>
            <div className="season-list-item__update">3 weeks ago</div>
        </div>
    </li>
}

export default Series
