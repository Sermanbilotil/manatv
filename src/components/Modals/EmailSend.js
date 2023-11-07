import Login from "./Login";
import logo from "../../img/mana-logo.svg";


const EmailSend = ({setShowLoginModal,confirmLetterSend, setEmailSendModal}) => {

    const openLoginModal = () => {
        setEmailSendModal(false)
        setShowLoginModal(true)
    }


    return <div className="overlay overlay--common active">
        <div className="overlay__bg"></div>
        <div className="modal modal--signup opened" style={{alignItems: 'center'}}>

            <a href="/" className="site-header__logo">
                <img src={logo} alt="logo"/>
            </a>

            <div className="settings-block__label settings-block__label--large" style={{textAlign: 'center', marginBottom: 25,marginTop: 20,}}>
                {confirmLetterSend}
            </div>



            <a onClick={() => openLoginModal()} href="#" className="modal__link modal__link--login" style={{}}>
                Log in
            </a>

        </div>
    </div>
}

export default EmailSend
