import {useEffect} from "react";



const Terms = () => {


    useEffect(() => {

    }, []);




    return <>
        <header className="common-header">
            <div className="container">
                <ul className="common-header__list">
                    <li className="common-header__item">
                        <a href="#" className="common-header__link">
                            <span className="common-header__name">Copyright</span>
                        </a>
                    </li>
                    <li className="common-header__item">
                        <a href="#" className="common-header__link ">
                            <span className="common-header__name">Privacy policy</span>
                        </a>
                    </li>
                    <li className="common-header__item">
                        <a href="#" className="common-header__link active">
                            <span className="common-header__name">Terms of service</span>
                        </a>
                    </li>
                    <li className="common-header__item">
                        <a href="#" className="common-header__link">
                            <span className="common-header__name">Terms of payment</span>
                        </a>
                    </li>
                </ul>
            </div>
        </header>
        <section className="terms">
            <div className="container">
                <div className="terms__content">
                    <h1>Privacy Policy</h1>
                    <p>
                        This Privacy Policy regulates the procedure for processing and using
                        personal data by the Administration of the website.
                    </p>
                    <p>
                        By using the website ororo.tv, the User{" "}
                        <a href="#">expresses their</a> entire consent to collection,
                        processing and usage of their personal data. Should the User refuse
                        the terms of this Privacy Policy, he undertakes to cease using the
                        Website.
                    </p>
                    <h2>1. Basic Terms and Definitions</h2>
                    <ul>
                        <li>
                            "User" — a legally capable individual entering into this Agreement
                            in their vested interest.
                        </li>
                        <li>
                            "Website" — online resources in the ororo.tv domain and subdomains.
                        </li>
                        <li>
                            "Agreement" — this agreement with all its addenda and amendments.
                        </li>
                    </ul>
                    <h2>2. Personal Data Collection and Processing</h2>
                    <p>
                        The Administration collects and processes the following User personal
                        data:
                    </p>
                    <ul>
                        <li>email address</li>
                        <li>IP address</li>
                        <li>information inside cookie files</li>
                        <li>other information</li>
                    </ul>
                    <p>
                        The Administration seeks to protect User personal data to the maximum
                        possible extent and uses state-of-the-art technology for safe
                        information storage. The Website Administration does not sell or
                        transfer User personal data to third parties without the User's
                        consent.
                    </p>
                    <h2>3. Personal Data Usage</h2>
                    <p>
                        The Website Administration may use personal data in the following
                        cases:
                    </p>
                    <ul>
                        <li>for User identification</li>
                        <li>for rendering services to the User</li>
                        <li>for User payment processing</li>
                        <li>for emailing promotional and informational content</li>
                        <li>for User request processing</li>
                        <li>for upgrading the service and content quality</li>
                    </ul>
                </div>
            </div>
        </section>
    </>


}

export default Terms

