


import InvertLogo from '../img/invert-logo.svg'


import {useEffect} from "react";
import {Link} from "react-router-dom";



const SerialCard = ({serial}) => {


    useEffect(() => {

    }, []);


    const addToFavourites = (e) => {
        e.preventDefault()
        const savedSerials = JSON.parse(localStorage.getItem('favouriteSerials2'))
  
    }

    return <li
        className="videos-list__item videos-list-item"
        style={{backgroundImage: `url(${serial.thumbnail})`}}

    >
        <Link to={`/videos/${serial.title}`} state={{serialId: serial.id}} className="videos-list-item__link">
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
                Add to:
                <div onClick={(e) => addToFavourites(e)} className="videos-list-item__fav">
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
                </div>
            </p>
        </Link>
    </li>
}

export default SerialCard
