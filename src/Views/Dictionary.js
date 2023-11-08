


import InvertLogo from '../img/invert-logo.svg'


import {useEffect} from "react";



const Dictionary = () => {


    useEffect(() => {

    }, []);




    return <section className="dictionary">
            <div className="container">
                <div className="dictionary-main">
                    <div className="sidebar">
                        <h1 className="sidebar__name">Dictionary</h1>
                        <button className="btn btn--transparent sidebar__btn">
                            Study words
                        </button>
                        <div className="sidebar-check">
                            <input
                                type="checkbox"
                                id="translation"
                                name="translation"
                                className="sidebar-checkbox"
                                defaultChecked=""
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
                                        defaultChecked=""
                                    />
                                    <label htmlFor="sources-all" className="sidebar-block__label">
                                        All words
                                    </label>
                                </li>
                                <li className="sidebar-block__item">
                                    <input
                                        type="radio"
                                        id="sources-1"
                                        className="sidebar-block__checkbox"
                                        name="sources"
                                    />
                                    <label htmlFor="sources-1" className="sidebar-block__label">
                                        Final Call
                                    </label>
                                    <span className="sidebar-block__count">13 words</span>
                                </li>
                            </ul>
                        </div>
                        <button className="btn btn--icon">
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
                        </button>
                        <button className="btn btn--icon btn-delete-all">
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
                                />
                            </div>
                            <div className="dictionary-section__item dictionary-section__item--type">
                                <div className="dictionary-type">
                                    <input
                                        type="radio"
                                        className="dictionary-type__radio"
                                        id="dictionary-type-1"
                                        name="dictionary-type"
                                        defaultChecked=""
                                        defaultValue="grid"
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
                                <div className="dictionary-type">
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
                        <ul className="dictionary-list">
                            <li className="dictionary-item">
                                <div className="dictionary-item__header">
                                    <div className="dictionary-item__value">Powerful</div>
                                    <div className="dictionary-item__btns">
                                        <button className="btn-icon btn-icon--play">
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
                                        <button className="btn-icon btn-icon--fav">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    fill="#111"
                                                    d="M20.378 12.502 12.001 21l-8.378-8.498a4.688 4.688 0 1 1 6.63-6.63L12.001 7.5l1.747-1.627a4.688 4.688 0 0 1 6.63 6.63Z"
                                                    opacity=".2"
                                                />
                                                <path
                                                    fill="#111"
                                                    d="M20.907 5.344a5.444 5.444 0 0 0-7.68-.01L12 6.474 10.773 5.33a5.438 5.438 0 0 0-7.679 7.7l8.377 8.5a.749.749 0 0 0 1.068 0l8.368-8.5a5.438 5.438 0 0 0 0-7.687Zm-1.064 6.633L12 19.931 4.153 11.97a3.938 3.938 0 1 1 5.57-5.569l.018.019 1.748 1.627a.75.75 0 0 0 1.022 0L14.26 6.42l.018-.019a3.938 3.938 0 1 1 5.565 5.573v.003Z"
                                                />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                <div className="dictionary-item__body">
                                    <div className="dictionary-item__translation">
                                        poderoso, potente
                                    </div>
                                    <div className="dictionary-item__languages">[eng-es]</div>
                                </div>
                            </li>
                            <li className="dictionary-item">
                                <div className="dictionary-item__header">
                                    <div className="dictionary-item__value">Powerful</div>
                                    <div className="dictionary-item__btns">
                                        <button className="btn-icon btn-icon--play">
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
                                        <button className="btn-icon btn-icon--fav">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    fill="#111"
                                                    d="M20.378 12.502 12.001 21l-8.378-8.498a4.688 4.688 0 1 1 6.63-6.63L12.001 7.5l1.747-1.627a4.688 4.688 0 0 1 6.63 6.63Z"
                                                    opacity=".2"
                                                />
                                                <path
                                                    fill="#111"
                                                    d="M20.907 5.344a5.444 5.444 0 0 0-7.68-.01L12 6.474 10.773 5.33a5.438 5.438 0 0 0-7.679 7.7l8.377 8.5a.749.749 0 0 0 1.068 0l8.368-8.5a5.438 5.438 0 0 0 0-7.687Zm-1.064 6.633L12 19.931 4.153 11.97a3.938 3.938 0 1 1 5.57-5.569l.018.019 1.748 1.627a.75.75 0 0 0 1.022 0L14.26 6.42l.018-.019a3.938 3.938 0 1 1 5.565 5.573v.003Z"
                                                />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                <div className="dictionary-item__body">
                                    <div className="dictionary-item__translation">
                                        poderoso, potente
                                    </div>
                                    <div className="dictionary-item__languages">[eng-es]</div>
                                </div>
                            </li>
                            <li className="dictionary-item">
                                <div className="dictionary-item__header">
                                    <div className="dictionary-item__value">Powerful</div>
                                    <div className="dictionary-item__btns">
                                        <button className="btn-icon btn-icon--play">
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
                                        <button className="btn-icon btn-icon--fav">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    fill="#111"
                                                    d="M20.378 12.502 12.001 21l-8.378-8.498a4.688 4.688 0 1 1 6.63-6.63L12.001 7.5l1.747-1.627a4.688 4.688 0 0 1 6.63 6.63Z"
                                                    opacity=".2"
                                                />
                                                <path
                                                    fill="#111"
                                                    d="M20.907 5.344a5.444 5.444 0 0 0-7.68-.01L12 6.474 10.773 5.33a5.438 5.438 0 0 0-7.679 7.7l8.377 8.5a.749.749 0 0 0 1.068 0l8.368-8.5a5.438 5.438 0 0 0 0-7.687Zm-1.064 6.633L12 19.931 4.153 11.97a3.938 3.938 0 1 1 5.57-5.569l.018.019 1.748 1.627a.75.75 0 0 0 1.022 0L14.26 6.42l.018-.019a3.938 3.938 0 1 1 5.565 5.573v.003Z"
                                                />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                <div className="dictionary-item__body">
                                    <div className="dictionary-item__translation">
                                        poderoso, potente
                                    </div>
                                    <div className="dictionary-item__languages">[eng-es]</div>
                                </div>
                            </li>
                            <li className="dictionary-item">
                                <div className="dictionary-item__header">
                                    <div className="dictionary-item__value">Powerful</div>
                                    <div className="dictionary-item__btns">
                                        <button className="btn-icon btn-icon--play">
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
                                        <button className="btn-icon btn-icon--fav">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    fill="#111"
                                                    d="M20.378 12.502 12.001 21l-8.378-8.498a4.688 4.688 0 1 1 6.63-6.63L12.001 7.5l1.747-1.627a4.688 4.688 0 0 1 6.63 6.63Z"
                                                    opacity=".2"
                                                />
                                                <path
                                                    fill="#111"
                                                    d="M20.907 5.344a5.444 5.444 0 0 0-7.68-.01L12 6.474 10.773 5.33a5.438 5.438 0 0 0-7.679 7.7l8.377 8.5a.749.749 0 0 0 1.068 0l8.368-8.5a5.438 5.438 0 0 0 0-7.687Zm-1.064 6.633L12 19.931 4.153 11.97a3.938 3.938 0 1 1 5.57-5.569l.018.019 1.748 1.627a.75.75 0 0 0 1.022 0L14.26 6.42l.018-.019a3.938 3.938 0 1 1 5.565 5.573v.003Z"
                                                />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                <div className="dictionary-item__body">
                                    <div className="dictionary-item__translation">
                                        poderoso, potente
                                    </div>
                                    <div className="dictionary-item__languages">[eng-es]</div>
                                </div>
                            </li>
                            <li className="dictionary-item">
                                <div className="dictionary-item__header">
                                    <div className="dictionary-item__value">Powerful</div>
                                    <div className="dictionary-item__btns">
                                        <button className="btn-icon btn-icon--play">
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
                                        <button className="btn-icon btn-icon--fav">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    fill="#111"
                                                    d="M20.378 12.502 12.001 21l-8.378-8.498a4.688 4.688 0 1 1 6.63-6.63L12.001 7.5l1.747-1.627a4.688 4.688 0 0 1 6.63 6.63Z"
                                                    opacity=".2"
                                                />
                                                <path
                                                    fill="#111"
                                                    d="M20.907 5.344a5.444 5.444 0 0 0-7.68-.01L12 6.474 10.773 5.33a5.438 5.438 0 0 0-7.679 7.7l8.377 8.5a.749.749 0 0 0 1.068 0l8.368-8.5a5.438 5.438 0 0 0 0-7.687Zm-1.064 6.633L12 19.931 4.153 11.97a3.938 3.938 0 1 1 5.57-5.569l.018.019 1.748 1.627a.75.75 0 0 0 1.022 0L14.26 6.42l.018-.019a3.938 3.938 0 1 1 5.565 5.573v.003Z"
                                                />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                <div className="dictionary-item__body">
                                    <div className="dictionary-item__translation">
                                        poderoso, potente
                                    </div>
                                    <div className="dictionary-item__languages">[eng-es]</div>
                                </div>
                            </li>
                            <li className="dictionary-item">
                                <div className="dictionary-item__header">
                                    <div className="dictionary-item__value">Powerful</div>
                                    <div className="dictionary-item__btns">
                                        <button className="btn-icon btn-icon--play">
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
                                        <button className="btn-icon btn-icon--fav">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    fill="#111"
                                                    d="M20.378 12.502 12.001 21l-8.378-8.498a4.688 4.688 0 1 1 6.63-6.63L12.001 7.5l1.747-1.627a4.688 4.688 0 0 1 6.63 6.63Z"
                                                    opacity=".2"
                                                />
                                                <path
                                                    fill="#111"
                                                    d="M20.907 5.344a5.444 5.444 0 0 0-7.68-.01L12 6.474 10.773 5.33a5.438 5.438 0 0 0-7.679 7.7l8.377 8.5a.749.749 0 0 0 1.068 0l8.368-8.5a5.438 5.438 0 0 0 0-7.687Zm-1.064 6.633L12 19.931 4.153 11.97a3.938 3.938 0 1 1 5.57-5.569l.018.019 1.748 1.627a.75.75 0 0 0 1.022 0L14.26 6.42l.018-.019a3.938 3.938 0 1 1 5.565 5.573v.003Z"
                                                />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                <div className="dictionary-item__body">
                                    <div className="dictionary-item__translation">
                                        poderoso, potente
                                    </div>
                                    <div className="dictionary-item__languages">[eng-es]</div>
                                </div>
                            </li>
                            <li className="dictionary-item">
                                <div className="dictionary-item__header">
                                    <div className="dictionary-item__value">Powerful</div>
                                    <div className="dictionary-item__btns">
                                        <button className="btn-icon btn-icon--play">
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
                                        <button className="btn-icon btn-icon--fav">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    fill="#111"
                                                    d="M20.378 12.502 12.001 21l-8.378-8.498a4.688 4.688 0 1 1 6.63-6.63L12.001 7.5l1.747-1.627a4.688 4.688 0 0 1 6.63 6.63Z"
                                                    opacity=".2"
                                                />
                                                <path
                                                    fill="#111"
                                                    d="M20.907 5.344a5.444 5.444 0 0 0-7.68-.01L12 6.474 10.773 5.33a5.438 5.438 0 0 0-7.679 7.7l8.377 8.5a.749.749 0 0 0 1.068 0l8.368-8.5a5.438 5.438 0 0 0 0-7.687Zm-1.064 6.633L12 19.931 4.153 11.97a3.938 3.938 0 1 1 5.57-5.569l.018.019 1.748 1.627a.75.75 0 0 0 1.022 0L14.26 6.42l.018-.019a3.938 3.938 0 1 1 5.565 5.573v.003Z"
                                                />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                <div className="dictionary-item__body">
                                    <div className="dictionary-item__translation">
                                        poderoso, potente
                                    </div>
                                    <div className="dictionary-item__languages">[eng-es]</div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>


}

export default Dictionary
