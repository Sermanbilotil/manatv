import Login from "./Login";
import {useState} from "react";
import {api_url, ValidateEmail} from "../../utils/utils";
import axios from "axios";
import Cookies from "js-cookie";


const ForgotPass = ({setShowPasswordModal,setShowLoginModal, setEmailSendModal, setConfirmLetterSend}) => {
    const [email, setEmail] = useState('')
    const [validEmail, setValidEmail] = useState('')

    const Login = () => {
        setShowPasswordModal(false)
        setShowLoginModal(true)
    }

    const resetPassword = (e) => {
        e.preventDefault();
        if(ValidateEmail(email)) {
            axios.post(api_url + 'users/reset_password/', {
                email: email,
                language: 'en'
            }, {
                withCredentials: true,
                headers: {
                    'Accept': 'application/json',
                }
            })
                .then(function (response) {
                    console.log('response',response);
                    setShowPasswordModal(false)
                    setConfirmLetterSend('Your new password has been sent to your e-mail address')
                    setEmailSendModal(true)
                })
                .catch(function (error) {
                    console.log(error.response.data)
                    if(error.response.data.detail) {
                        setValidEmail(error.response.data.detail)
                    }
                });

        } else {
            setValidEmail('Email not valid')
        }
    }


    return <div className="overlay overlay--common active">
        <div className="overlay__bg"></div>
        <div className="modal modal--password opened">
            <button onClick={() => setShowPasswordModal(false)} className="modal__close"></button>
            <div className="modal__name">
                Forgot your password?
            </div>
            <form className="modal__form">
                <label  className="modal__label">
                    Email
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" className="modal__input" placeholder="Write your email" />
                    {validEmail.length > 0 && <p className={'red_text'}>{validEmail}</p>}
                </label>
                <button onClick={(e) => resetPassword(e)} className="btn btn--black modal__btn">
                    Send me reset password instructions
                </button>
            </form>
            <a onClick={() => Login()} href="#" className="modal__link modal__link--login">
                Log in
            </a>
            {/*<a href="#" className="modal__link modal__link--signup">*/}
            {/*    Sign up*/}
            {/*</a>*/}
        </div>
    </div>
}

export default ForgotPass
