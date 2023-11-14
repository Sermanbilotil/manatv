

import {useEffect} from "react";

import Preview2x from '../img/preview-2x.png'
import Preview from '../img/preview.png'
import MoreInfo from '../img/more-info.png'
import Example2x from '../img/example-2x.png'
import Example from '../img/example.png'
import {Link} from "react-router-dom";


const MainPage = () => {


    useEffect(() => {

    }, []);




    return <>
        <section className="hero">
            <div className="hero__content">
                <h1 className="hero__title">Вивчай мови дивлячись серіали та фільми</h1>
                <p className="hero__text">Більше 3000 фільмів серіалів чекають на тебе</p>
                <Link to="/videos"  className="btn btn--white hero__btn">
                    Почати дивитись
                </Link>
            </div>
        </section>
        <section className="main-info">
            <div className="container container--assimetric">
                <div className="main-info__row">
                    <img
                        srcSet={Preview2x}
                        src={Preview}
                        alt="Preview of product"
                        className="main-info__img"
                    />
                    <div className="main-info__content">
                        <h2 className="main-info__title">
                            Excepteur sint occaecat cupidatat
                        </h2>
                        <div className="main-info__text">
                            <p>
                                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                                aut fugit, sed quia consequuntur ma Nemo enim ipsam voluptatem
                                quia voluptas sit aspernatur aut odit aut fugit. Nemo enim ipsam
                                voluptatem quia voluptas sit.
                            </p>
                            <p>
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                                accusantium doloremque laudantium, to
                            </p>
                            <p>
                                Ut enim ad minima veniam, quis nostrum exercitationem ullam
                                corporis suscipit laboriosam, nisi ut al Nemo enim ipsam
                                voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed
                                quia consequuntur ma Nemo enim ipsam voluptatem quia voluptas sit
                                aspernatur aut odit aut fugit. Nemo enim ipsam voluptatem quia
                                voluptas sit.
                            </p>
                        </div>
                        <Link to="/videos" className="btn btn--black main-info__btn">
                            Join now
                        </Link>
                    </div>
                </div>
            </div>
        </section>
        <section className="more-info">
            <div className="more-info__container">
                <h2 className="h1 more-info__title">Excepteur sint occaecat cupidatat</h2>
                <img
                    src={MoreInfo}
                    alt="Preview of product"
                    className="more-info__img"
                />
                <p className="more-info__text">
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
                    fugit, sed quia consequuntur ma Nemo enim ipsam voluptatem quia voluptas
                    sit aspernatur aut odit aut fugit. Nemo enim ipsam voluptatem quia
                    voluptas sit.
                </p>
            </div>
        </section>
        <section className="about">
            <div className="container">
                <div className="about__row">
                    <img
                        srcSet={Example2x}
                        src={Example}
                        alt="Preview of product"
                        className="about__img"
                    />
                    <div className="about__content">
                        <h2 className="about__title">Excepteur sint occaecat cupidatat</h2>
                        <div className="about__text">
                            <p>
                                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                                aut fugit, sed quia consequuntur ma Nemo enim ipsam voluptatem
                                quia voluptas sit aspernatur aut odit aut fugit. Nemo enim ipsam
                                voluptatem quia voluptas sit.
                            </p>
                            <p>
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                                accusantium doloremque laudantium, to
                            </p>
                            <p>
                                Ut enim ad minima veniam, quis nostrum exercitationem ullam
                                corporis suscipit laboriosam, nisi ut al Nemo enim ipsam
                                voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed
                                quia consequuntur ma Nemo enim ipsam voluptatem quia voluptas sit
                                aspernatur aut odit aut fugit. Nemo enim ipsam voluptatem quia
                                voluptas sit.
                            </p>
                        </div>
                        <Link to="./dictionary" className="btn btn--black about__btn">
                            Join now
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    </>

}

export default MainPage
