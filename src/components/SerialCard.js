import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {addToFavourites} from "../api/serials";
import Cookies from "js-cookie";
import {add} from "react-modal/lib/helpers/classList";
import {useTranslation} from "react-i18next";


const SerialCard = ({serial, favouriteSerials, getSerials, setSerials}) => {
    const token = Cookies.get('token');
    const { t } = useTranslation();
    const [inFavourite, setInFavourite] = useState(false)
    const [inFavouriteId, setInFavouriteId] = useState(null)

    useEffect(() => {
        const objectExists = checkIfFavourite()

        if (objectExists) {
            setInFavourite(true)
        }

    }, [favouriteSerials]);


    const checkIfFavourite = () => {
        const savedSerials = favouriteSerials || []

        const existing = savedSerials.some(obj => {
            console.log('id', obj.tv_show.id === serial.id)
            const isFavourite = obj.tv_show.id === serial.id

            if (isFavourite) {
                setInFavouriteId(obj.id)
            }
            return isFavourite;
        });

        return existing

    }

    return <li
        className="videos-list__item videos-list-item"
        style={{backgroundImage: `url(${serial.thumbnail})`}}

    >
        <Link to={`/videos/${serial.title}`}
              state={{
                  serialId: serial.id,
                  favouriteSerials: favouriteSerials,
                  currentInFavouriteId: inFavouriteId,
              }}
              className="videos-list-item__link">
            <p className="videos-list-item__name">{serial.title}</p>
            <ul className="videos-list-item__points">
                <li className="videos-list-item__point">{serial.genres.map(item => item + ', ')}</li>
                <li className="videos-list-item__point">{serial.duration}</li>
                <li className="videos-list-item__point">{serial.year}</li>
                <li className="videos-list-item__point">{serial.rating}</li>
            </ul>
            <p className="videos-list-item__description">
                {serial.description}
            </p>
            <p className="videos-list-item__add">
                {t('serial.add_to')}:
                <div
                    onClick={(e) => addToFavourites(e, serial, setInFavourite, token, inFavourite, inFavouriteId, setInFavouriteId)}
                    className="videos-list-item__fav">
                    {inFavourite ?
                        <svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
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
            </p>
        </Link>
    </li>
}

export default SerialCard
