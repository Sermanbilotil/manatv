


import InvertLogo from '../img/invert-logo.svg'


import {useEffect} from "react";



const WordCard  = ({showModal,wordData, originalLang, translatedLang, showTranslations}) => {


    useEffect(() => {

    }, []);




    const getSpeechTranslate = (e,text) => {
        e.stopPropagation();
        const value = new SpeechSynthesisUtterance(text)
        window.speechSynthesis.cancel();
        window.speechSynthesis.speak(value);

    }

    return <li onClick={() => showModal(wordData)} className="dictionary-item">
        <div className="dictionary-item__header">
            <div className="dictionary-item__value">{wordData.word}</div>
            <div className="dictionary-item__btns">

                <button onClick={(e) => getSpeechTranslate(e,wordData.word)} className="btn-icon btn-icon--play" style={{position: 'absolute'}}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                    >
                        <path
                            fill="#111"
                            d="M14.25 3v18L7.5 15.75H3a.75.75 0 0 1-.75-.75V9A.75.75 0 0 1 3 8.25h4.5L14.25 3Z"
                            opacity=".2"
                        />
                        <path
                            fill="#111"
                            d="M14.58 2.326a.75.75 0 0 0-.79.082L7.242 7.5H3A1.5 1.5 0 0 0 1.5 9v6A1.5 1.5 0 0 0 3 16.5h4.242l6.548 5.091A.749.749 0 0 0 15 21V3a.75.75 0 0 0-.42-.674Zm-1.08 17.14-5.54-4.308A.744.744 0 0 0 7.5 15H3V9h4.5a.744.744 0 0 0 .46-.158l5.54-4.308v14.932Zm5.25-9.716v4.5a.75.75 0 0 1-1.5 0v-4.5a.75.75 0 1 1 1.5 0Zm3-1.5v7.5a.75.75 0 0 1-1.5 0v-7.5a.75.75 0 1 1 1.5 0Z"
                        />
                    </svg>
                </button>
            </div>
        </div>
        <div className="dictionary-item__body">
            <div className="dictionary-item__translation">
                {showTranslations && wordData.translation}
            </div>
            <div className="dictionary-item__languages">[{originalLang +  ' - ' + [translatedLang] }]</div>
        </div>
    </li>
}

export default WordCard
