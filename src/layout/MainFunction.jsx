import React, {useState, useEffect} from 'react';
// import {Search} from '../components/Search'
import {SearchFunction} from '../components/SearchFunction';
import {Movies} from '../components/Movies'
import {Preloader} from '../components/Preloader'

const API_KEY = process.env.REACT_APP_API_KEY

function MainFunction () {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    const searchMovies = (str, type='all') => {
        setLoading(true);
        fetch (`https://www.omdbapi.com/?apikey=${API_KEY}&s=${str}${type !== 'all' ? `&type=${type}` : ''}`)
        .then(response => response.json())
        .then(data => {setMovies(data.Search); setLoading(false)})
        .catch((err) => {setLoading(false)})
    }


    useEffect (() => {
        fetch (`https://www.omdbapi.com/?apikey=${API_KEY}&s=matrix`)
        .then(response => response.json())
        .then(data => {setMovies(data.Search); setLoading(false)})
        .catch((err) => {setLoading(false)})
    }, [])

    return (
        <main className="container content">
            {/* <Search searchMovies={this.searchMovies} /> */}
            <SearchFunction searchMovies={searchMovies} />
            {
                loading ? (
                    <Preloader />
                ) : (
                    <Movies movies={movies} />
                )
            }
        </main>
    )
}

export {MainFunction}