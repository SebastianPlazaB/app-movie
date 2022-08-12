import React from "react"
import { useState } from "react"
import Search from "../Search/Search"
import Content from "../Content/Content"
import Title from "../title/Title"
import styles from "./Main.module.scss"


const axios = require("axios").default;
const Main = () => {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState(null);

    const getMoviesData = () => {


        axios.get(`https://www.omdbapi.com/?s=${query}&apikey=73157ade`)
            .then(response => setResults(response.data.Search)).catch(err=> console.log(err))
            
    }


    const handleClearResults = () => {
        setResults(null)
        setQuery('')
    }

    return (

        <div className={styles.container}>
            <Title />
            <Search
                query={query}
                setQuery={setQuery}
                onUserClick={getMoviesData}
            />
            <Content searchedMovies={results} />
            {results ? (
                <button
                    type="button"
                    onClick={() => handleClearResults()}>Clear</button>
            ) : null}
        </div>
    )

}

export default Main 