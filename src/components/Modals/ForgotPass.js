import Login from "./Login";


const ForgotPass = ({setShowPasswordModal,setShowLoginModal}) => {


    const Login = () => {
        setShowPasswordModal(false)
        setShowLoginModal(true)
    }
    return <div className="overlay overlay--common active">
        <div className="overlay__bg"></div>
        <div className="modal modal--password opened">
            <button onClick={() => setShowPasswordModal(false)} className="modal__close"></button>
            <div className="modal__name">
                Forgot your password?
            </div>
            <form className="modal__form">
                <label className="modal__label">
                    Email
                    <input type="email" className="modal__input" placeholder="Write your email" />
                </label>
                <button className="btn btn--black modal__btn">
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
