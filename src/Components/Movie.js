import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import '../css/Movie.css'
class Movie extends Component {
    render() {

        let movies = this.props.movies
        return(
            <div className="movie">
                {movies.map((m, index) => {
                    return (
                        <div className = "singleMovie" key = {index}>
                            <Link to = {`/movies/${m.id}`}>
                                <h4>{m.title} - {m.year}</h4>
                                <img src={m.img} alt={m.title}/>
                            </Link>
                        <button>+</button>
                    </div>)
                })}
            </div>
        )}
}

export default Movie