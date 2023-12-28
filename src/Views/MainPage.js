

import {useEffect} from "react";

import Preview2x from '../img/preview-2x.png'
import Preview from '../img/preview.png'
import MoreInfo from '../img/more-info.png'
import Example2x from '../img/example-2x.png'
import Example from '../img/example.png'
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";


const MainPage = () => {
    const { t } = useTranslation();


    useEffect(() => {

    }, []);




    return <>
        <section className="hero">
            <div className="hero__content">
                <h1 className="hero__title">{t('main_page.title')}</h1>
                <p className="hero__text">{t('main_page.subTitle')}</p>
                <Link to="/videos"  className="btn btn--white hero__btn">
                    {t('main_page.btn_start')}
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
                            {t('main_page.subtitle_title')}
                        </h2>
                        <div className="main-info__text">
                            <p>
                                {t('main_page.subtitle_desc1')}
                            </p>
                            <p>
                                {t('main_page.subtitle_desc2')}
                            </p>
                            <p>
                                {t('main_page.subtitle_desc3')}
                            </p>
                        </div>
                        <Link to="/videos" className="btn btn--black main-info__btn">
                            {t('main_page.btn_start')}
                        </Link>
                    </div>
                </div>
            </div>
        </section>
        <section className="more-info">
            <div className="more-info__container">
                <h2 className="more-info__title">{t('main_page.about_title')}</h2>
                <img
                    src={MoreInfo}
                    alt="Preview of product"
                    className="more-info__img"
                />
                <p className="more-info__text">
                    {t('main_page.about_desc')}
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
                        <h2 className="about__title">{t('main_page.add_words_title')}</h2>
                        <div className="about__text">
                            <p>
                                {t('main_page.add_words_text1')}
                            </p>
                            <p>
                                {t('main_page.add_words_text2')}
                            </p>
                            <p>
                                {t('main_page.add_words_text3')}
                            </p>
                        </div>
                        <Link to="./videos" className="btn btn--black about__btn">
                            {t('main_page.btn_start')}
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    </>

}

export default MainPage
