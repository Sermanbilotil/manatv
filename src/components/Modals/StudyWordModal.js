import Login from "./Login";
import logo from "../../img/mana-logo.svg";
import {useEffect, useState} from "react";
import {deleteDictionaryWord, editDictionaryWord} from "../../api/dictionary";


const StudyWordModal = ({setDictionaryData,dictionaryWords,setShowStudyWordModal, }) => {




    const [selectOpened, setSelectOpened] = useState(false)
    const [wordStatus, setWordStatus] = useState()
    const [currentWord, setCurrentWord] = useState([])
    const [wordsEnd, setWordsEnd] = useState(false)

    const [showTranslations, setShowTranslations] = useState(true)





    useEffect(() => {
            localStorage.setItem('studyIndex', '0')
            setCurrentWord(dictionaryWords[0])

    }, [])




    useEffect(() => {
        console.log('st', showTranslations)
    }, [showTranslations])


    const  changeWordStatus = (status) => {
        setWordStatus(status)
        editDictionaryWord(setDictionaryData,currentWord.id, status)
        nextWord()
    }

    const nextWord = (e) => {
        if(e) {
            e.preventDefault()
        }
        const index = Number(localStorage.getItem('studyIndex')) + 1
        console.log('index', index ,dictionaryWords)
       if(dictionaryWords.length - 1 >= index) {
           setCurrentWord(dictionaryWords[index])
           localStorage.setItem('studyIndex', index)
       } else {
           setWordsEnd(true)
       }
    }

    return <div className="overlay overlay--study active">
        <div className="overlay__bg"/>
        <div className="modal">
            <button onClick={() => {
                setShowStudyWordModal(false)

            }} className="modal__close"/>


            {wordsEnd ?  <div className="modal-dictionary__name">
                <span>There are no words left in your dictionary</span>
            </div> :

                <div className="modal__dictionary modal-dictionary">
                    <div className="modal-dictionary__name">
                        <span>{currentWord.word}</span>

                    </div>
                    <div className="modal-dictionary__translation">
                        {showTranslations && currentWord.translation}
                    </div>

                    <div className="sidebar-check">
                        <input
                            type="checkbox"
                            id="translation"
                            name="translation"
                            className="sidebar-checkbox"
                            defaultChecked=""
                            checked={showTranslations}
                            onChange={() => setShowTranslations(!showTranslations)}
                        />
                        <label onClick={() => setShowTranslations(!showTranslations)} htmlFor="translation" className="sidebar-checkbox__label">
                            Show translation
                        </label>
                    </div>


                    <form action="#" className="modal-dictionary__form">



                        <div style={{display: 'flex'}}>
                            <div onClick={() => changeWordStatus('well_known')} style={{color: "green", marginRight: 10,}} className="modal-dictionary__btn btn btn--transparent">Well known</div>
                            <div onClick={() => changeWordStatus('middle')} style={{color: "orange",marginRight: 10}} className="modal-dictionary__btn btn btn--transparent">Middle</div>
                            <div onClick={() => changeWordStatus('Junior')} style={{color: "red"}} className="modal-dictionary__btn btn btn--transparent">Junior</div>
                        </div>


                        <button onClick={(e) => nextWord(e)} className="modal-dictionary__btn btn btn--transparent">
                            Skip
                        </button>
                    </form>
                </div>

            }

        </div>
    </div>

}

export default StudyWordModal
