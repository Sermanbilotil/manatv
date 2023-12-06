import {Link} from "react-router-dom";


export const SearchSerial = ({serials}) => {


    return <ul className="site-search__list">

            {serials.map(item => {
                console.log('serials',item)
                return  <li className="site-search__item site-search-item">
                    <Link to={`/videos/${item.title}`}
                          state={{
                              serialId: item.id,
                          }}
                          className="site-search-item__link">
                        <img className="site-search-item__img" src={item.thumbnail}
                             alt="New iron man series"/>
                        <span className="site-search-item__name">{item.title}</span>
                    </Link>
                </li>
            })}

    </ul>
 }
