


import InvertLogo from '../img/invert-logo.svg'


import {useEffect, useState} from "react";
import {useTranslation} from "react-i18next";



const FAQ = () => {

    const { t } = useTranslation();

    useEffect(() => {

    }, []);

    const [opened1, setOpened1] = useState(false)
    const [opened2, setOpened2] = useState(false)
    const [opened3, setOpened3] = useState(false)
    const [opened4, setOpened4] = useState(false)
    const [opened5, setOpened5] = useState(false)
    const [opened6, setOpened6] = useState(false)
    const [opened7, setOpened7] = useState(false)
    const [opened8, setOpened8] = useState(false)



    return <>
        {/*<header className="common-header">*/}
        {/*    <div className="container">*/}
        {/*        <ul className="common-header__list">*/}
        {/*            <li className="common-header__item">*/}
        {/*                <a href="#" className="common-header__link">*/}
        {/*                    <span className="common-header__name">Copyright</span>*/}
        {/*                </a>*/}
        {/*            </li>*/}
        {/*            <li className="common-header__item">*/}
        {/*                <a href="#" className="common-header__link active">*/}
        {/*                    <span className="common-header__name">Privacy policy</span>*/}
        {/*                </a>*/}
        {/*            </li>*/}
        {/*            <li className="common-header__item">*/}
        {/*                <a href="#" className="common-header__link">*/}
        {/*                    <span className="common-header__name">Terms of service</span>*/}
        {/*                </a>*/}
        {/*            </li>*/}
        {/*            <li className="common-header__item">*/}
        {/*                <a href="#" className="common-header__link">*/}
        {/*                    <span className="common-header__name">Terms of payment</span>*/}
        {/*                </a>*/}
        {/*            </li>*/}
        {/*        </ul>*/}
        {/*    </div>*/}
        {/*</header>*/}
        <section className="faq">
            <div className="container">
                <div className="faq__content">
                    <h1>FAQ</h1>
                    <div className="faq__items">
                        <div onClick={() => setOpened1(!opened1)} className={opened1 ? "faq-item opened" : "faq-item"}>
                            <div className="faq-item__header">
                                {t('faq.pass_title')}
                            </div>
                            <div className="faq-item__body">
                                {t('faq.pass_desc')}
                            </div>
                        </div>
                        <div onClick={() => setOpened2(!opened2)} className={opened2 ? "faq-item opened" : "faq-item"}>
                            <div className="faq-item__header">
                                {t('faq.pass_change_title')}
                            </div>
                            <div className="faq-item__body">
                                {t('faq.pass_change_desc')}
                            </div>
                        </div>
                        <div onClick={() => setOpened3(!opened3)} className={opened3 ? "faq-item opened" : "faq-item"}>
                            <div className="faq-item__header">
                                {t('faq.register_title')}
                            </div>
                            <div className="faq-item__body">
                                {t('faq.register_desc')}
                            </div>
                        </div>
                        <div onClick={() => setOpened4(!opened4)} className={opened4 ? "faq-item opened" : "faq-item"}>
                            <div className="faq-item__header">
                                {t('faq.login_issue_title')}
                            </div>
                            <div className="faq-item__body">
                                {t('faq.login_issue_desc')}
                            </div>
                        </div>
                        <div onClick={() => setOpened5(!opened5)} className={opened5 ? "faq-item opened" : "faq-item"}>
                            <div className="faq-item__header">
                                {t('faq.file_format_title')}
                            </div>
                            <div className="faq-item__body">
                                {t('faq.file_format_desc')}
                            </div>
                        </div>
                        <div onClick={() => setOpened6(!opened6)} className={opened6 ? "faq-item opened" : "faq-item"}>
                            <div className="faq-item__header">
                                {t('faq.subscription_title')}
                            </div>
                            <div className="faq-item__body">
                                {t('faq.subscription_desc')}
                            </div>
                        </div>
                        <div onClick={() => setOpened7(!opened7)} className={opened7 ? "faq-item opened" : "faq-item"}>
                            <div className="faq-item__header">
                                {t('faq.sbscr_activation_title')}
                            </div>
                            <div className="faq-item__body">
                                {t('faq.sbscr_activation_desc')}
                            </div>
                        </div>
                        <div onClick={() => setOpened8(!opened8)} className={opened8 ? "faq-item opened" : "faq-item"}>
                            <div className="faq-item__header">
                                {t('faq.content_title')}
                            </div>
                            <h3 className="faq-item__body">
                                {t('faq.content_desc_title')}
                            </h3>
                            <div className="faq-item__body">
                                {t('faq.content_desc')}
                            </div>
                        </div>



                    </div>
                </div>
            </div>
        </section>
    </>

}

export default FAQ
