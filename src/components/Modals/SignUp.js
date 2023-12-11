import {useTranslation} from "react-i18next";

const Register = ({
                      setShowSignModal,
                      setShowLoginModal,
                      userName,
                      setUserName,
                      email,
                      setEmail,
    validEmail,
                      password,
                      setPassword,
                      confirmPassword,
                      setConfirmPassword,
                      Register,
                      confirmLetterSend
                  }) => {

    const { t } = useTranslation();
    const openLoginModal = () => {
        setShowSignModal(false)
        setShowLoginModal(true)
    }


    return <div className="overlay overlay--common active">
        <div className="overlay__bg"></div>

        <div className="modal modal--signup opened">
            <button onClick={() => setShowSignModal(false)} className="modal__close"></button>
            <div className="modal__name">
                {t('header.sign_up')}
            </div>
            <form className="modal__form">
                <label className="modal__label">
                    {t('setting.name')}
                    <input value={userName} onChange={e => setUserName(e.target.value)} type="text" className="modal__input" placeholder={t('setting.name')}/>
                </label>
                <label className="modal__label">
                    Email
                    <input value={email} onChange={e => setEmail(e.target.value)} type="email" className="modal__input" placeholder="Write your email"/>
                    {validEmail.length > 0 && <p className={'red_text'}>{validEmail}</p>}
                </label>

                <label className="modal__label">
                    {t('login.password')}
                    <input value={password} onChange={e => setPassword(e.target.value)} type="password" className="modal__input" placeholder= {t('login.password')}/>
                </label>
                <label className="modal__label">
                    {t('setting.confirm_pass')}
                    <input value={confirmPassword}  onChange={(e) => setConfirmPassword(e.target.value)} type="password" className="modal__input" placeholder= {t('setting.confirm_pass_placeholder')}/>
                </label>
                {/*{confirmLetterSend.length > 0 && <p className={'green_text'}>{confirmLetterSend}</p>}*/}
                <button onClick={(e) => Register(e)} className="btn btn--black modal__btn">
                    {t('header.sign_up')}
                </button>

            </form>
            {/*<div className="modal__network">*/}
            {/*    <div className="modal__network-title">*/}
            {/*        With social networks*/}
            {/*    </div>*/}
            {/*    <div className="modal__network-btns">*/}
            {/*        <button className="btn btn--network">*/}
            {/*            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 33 32">*/}
            {/*                <path className="fill" fill="#111"*/}
            {/*                      d="M16.75 3.25A12.75 12.75 0 1 0 29.5 16 12.765 12.765 0 0 0 16.75 3.25Zm.75 23.975V18.75h3.25a.75.75 0 1 0 0-1.5H17.5V14a2.25 2.25 0 0 1 2.25-2.25h2a.75.75 0 1 0 0-1.5h-2A3.75 3.75 0 0 0 16 14v3.25h-3.25a.75.75 0 1 0 0 1.5H16v8.475a11.25 11.25 0 1 1 1.5 0Z"/>*/}
            {/*            </svg>*/}
            {/*        </button>*/}
            {/*        <button className="btn btn--network">*/}
            {/*            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 33 32">*/}
            {/*                <path className="fill" fill="#111"*/}
            {/*                      d="M30.943 8.714a.75.75 0 0 0-.693-.464H26.3a5.825 5.825 0 0 0-5.041-3 5.617 5.617 0 0 0-4.039 1.64A5.74 5.74 0 0 0 15.5 11v1.082c-5.25-1.25-9.575-5.565-9.625-5.61a.75.75 0 0 0-1.275.46c-.531 5.903 1.178 9.844 2.705 12.112a13.462 13.462 0 0 0 2.884 3.125c-1.936 2.375-5.168 3.611-5.203 3.625a.75.75 0 0 0-.36 1.125c.124.185 1.347 1.831 5.624 1.831 8.735 0 16.029-6.75 16.728-15.418l3.802-3.8a.75.75 0 0 0 .163-.818ZM25.72 12.47a.75.75 0 0 0-.219.482c-.51 8.018-7.21 14.298-15.25 14.298-1.75 0-2.846-.301-3.508-.6 1.412-.71 3.715-2.11 5.13-4.234a.75.75 0 0 0-.248-1.064c-.016-.01-1.641-.982-3.125-3.215C6.75 15.5 5.914 12.304 6 8.61c1.86 1.575 5.696 4.386 10.125 5.125a.748.748 0 0 0 .875-.74V11a4.25 4.25 0 0 1 1.274-3.043A4.132 4.132 0 0 1 21.24 6.75c1.68.021 3.25 1.046 3.905 2.55a.75.75 0 0 0 .688.45h2.605l-2.719 2.72Z"/>*/}
            {/*            </svg>*/}
            {/*        </button>*/}
            {/*        <button className="btn btn--network">*/}
            {/*            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 33 32">*/}
            {/*                <path className="fill" fill="#111"*/}
            {/*                      d="M28.5 16a11.75 11.75 0 1 1-2.686-7.478.749.749 0 0 1-.647 1.236.75.75 0 0 1-.51-.28 10.25 10.25 0 1 0 2.316 7.272H16.75a.75.75 0 1 1 0-1.5h11a.75.75 0 0 1 .75.75Z"/>*/}
            {/*            </svg>*/}
            {/*        </button>*/}
            {/*        <button className="btn btn--network">*/}
            {/*            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 33 32">*/}
            {/*                <path className="stroke" stroke="#111" strokeLinecap="round" strokeLinejoin="round"*/}
            {/*                      d="M18.549 24.884v-4.976c3.202.51 4.214 3.14 6.253 4.976H30a21.941 21.941 0 0 0-5.672-7.846c1.867-2.683 3.848-5.209 4.818-9.038h-4.724c-1.853 2.93-2.83 6.363-5.873 8.626V8h-6.857l1.637 2.113v7.532C10.673 17.323 8.878 12.249 6.932 8H2c1.795 5.74 5.571 18.338 16.549 16.884Z"/>*/}
            {/*            </svg>*/}
            {/*        </button>*/}
            {/*    </div>*/}
            {/*</div>*/}
            <a onClick={() => openLoginModal()} href="#" className="modal__link modal__link--login">
                {t('header.login')}
            </a>
            {/*<a href="#" className="modal__link modal__link--password">*/}
            {/*    Forgot your password?*/}
            {/*</a>*/}
        </div>

    </div>
}

export default Register
