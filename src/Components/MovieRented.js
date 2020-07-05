import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class MovieRented extends Component {


    updateButton = () => {
        return this.props.isRented(this.props.movies.id)
    }

    render() {
        let movies = this.props.movies
        return (
            <div className="singleRentedMovie" key={movies.id}>
                <Link to={`/movies/${movies.id}`} className="linkElement" style={{ textDecoration: 'none'}}>
                    <h4 className="movieName">{movies.title} - {movies.year}</h4>
                    <img src={movies.img} alt={movies.title} className="rented-Image"/>
                </Link>
                {movies.isRented ?
                    <button className="movie-btt" onClick={this.updateButton}>-</button> :
                    <button className="movie-btt" onClick={this.updateButton}>+</button>}
            </div>
        )

    }
}


export default MovieRented;
