import React from 'react';
import {Search} from '../components/Search'
import {Movies} from '../components/Movies'
import { Preloader } from '../components/Preloader'

class Main extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            movies: [],
            loading: true,
        }
    }

    componentDidMount () {
        fetch ('http://www.omdbapi.com/?apikey=7b4ee842&s=matrix')
        .then(response => response.json())
        .then(data => this.setState({movies: data.Search, loading: false,}))
    }

    searchMovies = (str, type='all') => {
        this.setState({loading: true,})
        fetch (`http://www.omdbapi.com/?apikey=7b4ee842&s=${str}${type !== 'all' ? `&type=${type}` : ''}`)
        .then(response => response.json())
        .then(data => this.setState({movies: data.Search, loading: false,}))
    }

    render () {
        const {movies, loading} = this.state;
        return (
            <main className="container content">
                <Search searchMovies={this.searchMovies} />
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
}

export {Main}