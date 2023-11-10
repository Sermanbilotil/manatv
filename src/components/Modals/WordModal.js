import Login from "./Login";
import logo from "../../img/mana-logo.svg";
import {useEffect, useState} from "react";
import {deleteDictionaryWord, editDictionaryWord} from "../../api/dictionary";


const WordModal = ({setDictionaryData,activeWordData,setShowWordModal, }) => {


    console.log('activeWordData',activeWordData)

    const [selectOpened, setSelectOpened] = useState(false)
    const [wordStatus, setWordStatus] = useState(activeWordData.status)


    const getSpeechTranslate = (e,text) => {
        e.stopPropagation();
        const value = new SpeechSynthesisUtterance(text)
        window.speechSynthesis.cancel();
        window.speechSynthesis.speak(value);

    }


   const  changeWordStatus = (status) => {
       setWordStatus(status)
       editDictionaryWord(setDictionaryData,activeWordData.id, status)
   }

   const deleteWord = (e) => {

        e.preventDefault()
       deleteDictionaryWord(activeWordData.id, setDictionaryData, setShowWordModal)
   }

    return <div className="overlay overlay--study active">
        <div className="overlay__bg"/>
        <div className="modal">
            <button onClick={() => setShowWordModal()} className="modal__close"/>
            <div className="modal__dictionary modal-dictionary">
                <div className="modal-dictionary__name">
                    <span>{activeWordData.word}</span>
                    <button onClick={(e) => getSpeechTranslate(e,activeWordData.word)} className="btn-icon btn-icon--play">
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
                <div className="modal-dictionary__translation">
                    {activeWordData.translation}
                </div>
                <form action="#" className="modal-dictionary__form">
                    <label className="settings-block__label">
                        Select status
                        <div onClick={() => setSelectOpened(!selectOpened)}  className="custom-select">
                            <div className={selectOpened ? 'select-header opened' : 'select-header'}>
              <span className="selected-option" style={{color: wordStatus === 'Junior' ? 'red' : wordStatus === 'middle' ? 'orange' : 'green' }}>
               {wordStatus.charAt(0).toUpperCase() + wordStatus.slice(1).replace('_', ' ')}
              </span>
                                <i className="arrow-icon"/>

                            </div>
                            <ul className={selectOpened ? 'options-list opened' : 'options-list'}>
                                <li onClick={() => changeWordStatus('well_known')} style={{color: "green"}}>Well known</li>
                                <li onClick={() => changeWordStatus('middle')} style={{color: "orange"}}>Middle</li>
                                <li onClick={() => changeWordStatus('Junior')} style={{color: "red"}}>Junior</li>
                            </ul>
                        </div>
                    </label>
                    <button onClick={(e) => deleteWord(e)} className="modal-dictionary__btn btn btn--transparent">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                        >
                            <path
                                fill="#111"
                                d="M20.25 4.688h-3.938V3.75a2.062 2.062 0 0 0-2.062-2.063h-4.5A2.063 2.063 0 0 0 7.687 3.75v.938H3.75a.563.563 0 1 0 0 1.125h.938V19.5A1.313 1.313 0 0 0 6 20.813h12a1.313 1.313 0 0 0 1.313-1.313V5.812h.937a.562.562 0 1 0 0-1.125ZM8.812 3.75a.937.937 0 0 1 .938-.938h4.5a.937.937 0 0 1 .938.938v.938H8.811V3.75Zm9.376 15.75a.188.188 0 0 1-.188.188H6a.188.188 0 0 1-.188-.188V5.812h12.375V19.5Zm-7.875-9.75v6a.562.562 0 1 1-1.126 0v-6a.563.563 0 1 1 1.126 0Zm4.5 0v6a.562.562 0 1 1-1.126 0v-6a.563.563 0 0 1 1.126 0Z"
                            />
                        </svg>
                        Remove
                    </button>
                </form>
            </div>
        </div>
    </div>

}

export default WordModal
