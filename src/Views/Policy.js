import {useEffect} from "react";
import {useTranslation} from "react-i18next";
import TermsHeader from "../components/TermsHeader";



const Policy = () => {
    const { t } = useTranslation();

    useEffect(() => {

    }, []);




    return <>
            <TermsHeader />
        <section className="terms">
            <div className="container">
                <div className="terms__content">
                    <h1>{t('terms_conditions.privacy_title')}</h1>
                    <p>
                        {t('terms_conditions.privacy_desc1')}
                    </p>
                    <p>
                        {t('terms_conditions.privacy_desc2')}
                    </p>
                    <h2>1. {t('terms_conditions.definitions_title')}</h2>
                    <ul>
                        <li>
                            {t('terms_conditions.user')}
                        </li>
                        <li>
                            {t('terms_conditions.site')}
                        </li>
                        <li>
                            {t('terms_conditions.agreement')}
                        </li>
                    </ul>
                    <h2>2.  {t('terms_conditions.collection_title')}</h2>
                    <p>
                        {t('terms_conditions.collection_desc')}
                    </p>
                    <ul>
                        <li> {t('terms_conditions.email')}</li>
                        <li> {t('terms_conditions.ip')}</li>
                        <li> {t('terms_conditions.cookie')}</li>
                        <li> {t('terms_conditions.other')}</li>
                    </ul>
                    <p>
                        {t('terms_conditions.collection_warn')}
                    </p>
                    <h2>3.{t('terms_conditions.use_data')}</h2>
                    <p>
                        {t('terms_conditions.use_data_title')}
                    </p>
                    <ul>
                        <li>{t('terms_conditions.user_identify')}</li>
                        <li>{t('terms_conditions.providing_services')}</li>
                        <li>{t('terms_conditions.processing_payments')}</li>
                        <li>{t('terms_conditions.send_promo')}</li>
                        <li>{t('terms_conditions.processing_inquiries')}</li>
                        <li>{t('terms_conditions.quality')}</li>
                        <li>{t('terms_conditions.use_api')}</li>
                    </ul>

                    <h2>5.  {t('terms_conditions.editing_data')}</h2>
                    <p>
                        {t('terms_conditions.edit_desc')}
                    </p>
                    <h2>6.  {t('terms_conditions.responsibility')}</h2>
                    <p>
                        {t('terms_conditions.responsibility_desc')}
                    </p>
                </div>
            </div>
        </section>
    </>


}

export default Policy

