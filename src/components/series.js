



import {useEffect, useState} from "react";
import {renderFlag} from "../utils/flags";



const Series = ({episode, series,setSeries,}) => {

    const [showDescription, setShowDescription]  = useState(false)
    useEffect(() => {

    }, []);




    return <li className="season-list__item season-list-item">
        <span className="season-list-item__number">{episode.episode_number}</span>
        <div className="season-list-item__content">
            <div onClick={() => series !== episode.episode_number ?  setSeries(episode.episode_number) : setSeries(0)} className="season-list-item__name video-open">
                {episode.title}
            </div>
            <div className={showDescription ? 'season-list-item__description opened' : 'season-list-item__description'}>
                <p>
                    {episode.description}
                </p>
            </div>
            <button
                className="season-list-item__more"
                onClick={() => setShowDescription(!showDescription)}
            >
                {showDescription ? 'hide description' : 'show description'}
            </button>
        </div>
        <div className="season-list-item__info">
            <div className="season-list-item__flags">

                {episode.episode_subtitles.reverse().map(item => {
                        console.log('item', item.language)
                    return    renderFlag(item)
                })}

            </div>
            <div className="season-list-item__update">3 weeks ago</div>
        </div>
    </li>
}

export default Series
