import {ExportJsonCsv} from 'react-export-json-csv';


import {useEffect, useState} from "react";
import WordCard from "../../components/WordCard";
import {deleteDictionary, deleteDictionaryWord, getDictionary, getDictionaryData} from "../../api/dictionary";
import WordModal from "../../components/Modals/WordModal";
import StudyWordModal from "../../components/Modals/StudyWordModal";
import SubHeader from "../../components/SubHeader";
import Cookies from "js-cookie";

const token = Cookies.get('token');
const Dictionary = () => {

    const [gridType, setGridType] = useState('grid')
    const [searchWord, setSearchWord] = useState('')
    const [source, setSource] = useState(null)
    const [sourceError, setSourceError] = useState('')


    const [dictionary, setDictionary] = useState(null)
    const [dictionaryData, setDictionaryData] = useState(null)
    const [dictionaryWords, setDictionaryWords] = useState(null)


    const [showWordModal, setShowWordModal] = useState(false)
    const [showStudyWordModal, setShowStudyWordModal] = useState(false)
    const [activeWordData, setActiveWordData] = useState(null)

    const [showTranslations, setShowTranslations] = useState(true)


    useEffect(() => {
        getDictionary(setDictionary)
    }, [token]);

    useEffect(() => {
        if (dictionary !== null && dictionary.length > 0) {

            getDictionaryData(dictionary[0].id, setDictionaryData)
        }
    }, [dictionary]);

    useEffect(() => {
        if (dictionaryData !== null) {
            setDictionaryWords(dictionaryData.dictionary_words)

        }
    }, [dictionaryData]);


    useEffect(() => {
        console.log('searchWord ', searchWord)
        let filteredWords = dictionaryWords
        if (dictionaryWords !== null) {
            filteredWords = dictionaryData.dictionary_words.filter(item => item.word.includes(searchWord))
            setDictionaryWords(filteredWords)
        }
    }, [searchWord]);


    useEffect(() => {

        console.log('source ', source)
        let filteredWords = dictionaryWords
        if (dictionaryWords !== null && source !== null) {
            filteredWords = dictionaryData.dictionary_words.filter(item => item.source === source)
            setDictionaryWords(filteredWords)
        } else {
            dictionaryData !== null && setDictionaryWords(dictionaryData.dictionary_words)
        }
    }, [source]);



    const showModal = (data) => {
        setShowWordModal(true)
        setActiveWordData(data)
    }




    return <>  <SubHeader />

    <section className="dictionary">
        <div className="container">
            <div className="dictionary-main">
                <div className="sidebar">
                    <h1 className="sidebar__name">Dictionary</h1>
                    <button onClick={() => setShowStudyWordModal(true)} className="btn btn--transparent sidebar__btn">
                        Study words
                    </button>
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
                        <label htmlFor="translation" className="sidebar-checkbox__label">
                            Show translation
                        </label>
                    </div>
                    <div className="sidebar-block">
                        <h3 className="sidebar-block__title">Source</h3>
                        <ul className="sidebar-block__items">
                            <li className="sidebar-block__item">
                                <input
                                    type="radio"
                                    id="sources-all"
                                    className="sidebar-block__checkbox"
                                    name="sources"
                                    defaultChecked="true"
                                />
                                <label onClick={() => setSource(null)} htmlFor="sources-all" className="sidebar-block__label">
                                    All words
                                </label>
                            </li>
                            {dictionaryData && dictionaryData.sources_word_count.map(item => {
                                const newSource = item.source_title === "New Serial" ? 3 : 4

                                return <li className="sidebar-block__item">
                                    <input
                                        type="radio"
                                        id={"sources" + newSource}
                                        className="sidebar-block__checkbox"
                                        name="sources"
                                    />
                                    <label onClick={() => setSource(newSource)} htmlFor={"sources" + newSource} className="sidebar-block__label">
                                        {item.source_title}
                                    </label>
                                    <span className="sidebar-block__count">{item.count}</span>
                                </li>
                            })}
                        </ul>
                    </div>

                    <ExportJsonCsv className="btn btn--icon" headers={[
                        {
                            key: 'id',
                            name: 'title',
                        },
                        {
                            key: 'word',
                            name: 'Word',
                        },
                        {
                            key: 'translation',
                            name: 'Translation',
                        },
                        {
                            key: 'status',
                            name: 'Status',
                        },
                    ]} items={dictionaryWords}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                        >
                            <path
                                fill="#111"
                                d="M20.063 10.5v9a1.313 1.313 0 0 1-1.313 1.313H5.25A1.313 1.313 0 0 1 3.937 19.5v-9A1.313 1.313 0 0 1 5.25 9.187H7.5a.563.563 0 0 1 0 1.126H5.25a.187.187 0 0 0-.188.187v9a.188.188 0 0 0 .188.188h13.5a.188.188 0 0 0 .188-.188v-9a.188.188 0 0 0-.188-.188H16.5a.562.562 0 1 1 0-1.125h2.25a1.313 1.313 0 0 1 1.313 1.313ZM8.648 6.397l2.79-2.789v9.142a.562.562 0 1 0 1.124 0V3.608l2.79 2.79a.563.563 0 1 0 .796-.796l-3.75-3.75a.563.563 0 0 0-.796 0l-3.75 3.75a.563.563 0 1 0 .796.795Z"
                            />
                        </svg>
                        Export
                    </ExportJsonCsv>
                    <button onClick={() => dictionary.length > 0 && deleteDictionary(dictionary[0].id, setDictionary)} className="btn btn--icon btn-delete-all">
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
                        Delete all
                    </button>

                </div>
                <div className="dictionary-section">
                    <div className="dictionary-section__head">
                        <div className="dictionary-section__item dictionary-section__item--search dictionary-search">
                            <input
                                type="text"
                                className="dictionary-search__input"
                                name="search-dictionary"
                                placeholder="Type a word"
                                onChange={(e) => setSearchWord(e.target.value)}
                            />
                        </div>
                        <div className="dictionary-section__item dictionary-section__item--type">
                            <div onClick={() => setGridType('grid')} className="dictionary-type">
                                <input
                                    type="radio"
                                    className="dictionary-type__radio"
                                    id="dictionary-type-1"
                                    name="dictionary-type"
                                    defaultChecked=""
                                    defaultValue="grid"
                                    checked={gridType === 'grid' ? true : false}
                                />
                                <label
                                    className="dictionary-type__label"
                                    htmlFor="dictionary-type-1"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 33 32"
                                    >
                                        <path
                                            fill="#111"
                                            d="M13.5 5.25h-6A1.75 1.75 0 0 0 5.75 7v6a1.75 1.75 0 0 0 1.75 1.75h6A1.75 1.75 0 0 0 15.25 13V7a1.75 1.75 0 0 0-1.75-1.75Zm.25 7.75a.25.25 0 0 1-.25.25h-6a.25.25 0 0 1-.25-.25V7a.25.25 0 0 1 .25-.25h6a.25.25 0 0 1 .25.25v6ZM25.5 5.25h-6A1.75 1.75 0 0 0 17.75 7v6a1.75 1.75 0 0 0 1.75 1.75h6A1.75 1.75 0 0 0 27.25 13V7a1.75 1.75 0 0 0-1.75-1.75Zm.25 7.75a.25.25 0 0 1-.25.25h-6a.25.25 0 0 1-.25-.25V7a.25.25 0 0 1 .25-.25h6a.25.25 0 0 1 .25.25v6ZM13.5 17.25h-6A1.75 1.75 0 0 0 5.75 19v6a1.75 1.75 0 0 0 1.75 1.75h6A1.75 1.75 0 0 0 15.25 25v-6a1.75 1.75 0 0 0-1.75-1.75Zm.25 7.75a.25.25 0 0 1-.25.25h-6a.25.25 0 0 1-.25-.25v-6a.25.25 0 0 1 .25-.25h6a.25.25 0 0 1 .25.25v6Zm11.75-7.75h-6A1.75 1.75 0 0 0 17.75 19v6a1.75 1.75 0 0 0 1.75 1.75h6A1.75 1.75 0 0 0 27.25 25v-6a1.75 1.75 0 0 0-1.75-1.75Zm.25 7.75a.25.25 0 0 1-.25.25h-6a.25.25 0 0 1-.25-.25v-6a.25.25 0 0 1 .25-.25h6a.25.25 0 0 1 .25.25v6Z"
                                        />
                                    </svg>
                                </label>
                            </div>
                            <div onClick={() => setGridType('listing')} className="dictionary-type">
                                <input
                                    type="radio"
                                    className="dictionary-type__radio"
                                    id="dictionary-type-2"
                                    name="dictionary-type"
                                    defaultValue="listing"
                                />
                                <label
                                    className="dictionary-type__label"
                                    htmlFor="dictionary-type-2"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 33 32"
                                    >
                                        <path
                                            fill="#111"
                                            d="M25.5 5.25h-18A1.75 1.75 0 0 0 5.75 7v6a1.75 1.75 0 0 0 1.75 1.75h18A1.75 1.75 0 0 0 27.25 13V7a1.75 1.75 0 0 0-1.75-1.75Zm.25 7.75a.25.25 0 0 1-.25.25h-18a.25.25 0 0 1-.25-.25V7a.25.25 0 0 1 .25-.25h18a.25.25 0 0 1 .25.25v6Zm-.25 4.25h-18A1.75 1.75 0 0 0 5.75 19v6a1.75 1.75 0 0 0 1.75 1.75h18A1.75 1.75 0 0 0 27.25 25v-6a1.75 1.75 0 0 0-1.75-1.75Zm.25 7.75a.25.25 0 0 1-.25.25h-18a.25.25 0 0 1-.25-.25v-6a.25.25 0 0 1 .25-.25h18a.25.25 0 0 1 .25.25v6Z"
                                        />
                                    </svg>
                                </label>
                            </div>
                        </div>
                    </div>
                    <ul className={gridType === 'grid' ? 'dictionary-list dictionary-list--grid' : 'dictionary-list dictionary-list--listing'}>

                        {dictionaryWords !== null && dictionaryWords.map(item => {

                            return <WordCard showModal={showModal}
                                             setShowWordModal={setShowWordModal}
                                             wordData={item}
                                             originalLang={dictionaryData?.original_language}
                                             translatedLang={dictionaryData?.translated_language}
                                             showTranslations={showTranslations}
                            />
                        })}

                    </ul>

                    {showWordModal && <WordModal setDictionaryData={setDictionaryData}
                                                 activeWordData={activeWordData}
                                                 setShowWordModal={setShowWordModal}/>}

                    {showStudyWordModal && <StudyWordModal
                        setDictionaryData={setDictionaryData}
                        setShowStudyWordModal={setShowStudyWordModal}
                        dictionaryWords={dictionaryWords}


                    />}

                </div>
            </div>
        </div>
    </section>
    </>

}

export default Dictionary
