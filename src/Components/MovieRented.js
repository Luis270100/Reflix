import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class MovieRented extends Component {
    

    updateButton = () => {
        return this.props.isRented(this.props.movies.id)
    }

    render() { 
        let movies = this.props.movies
        return (
            <div className="movie">
                <div className="singleMovie" key={movies.id}>
                    <Link to={`/movies/${movies.id}`}>
                        <h4>{movies.title} - {movies.year}</h4>
                        <img src={movies.img} alt={movies.title} />
                    </Link>
                    {movies.isRented ?
                        <button onClick={this.updateButton}>-</button> :
                        <button onClick={this.updateButton}>+</button>}
                </div>
            
            </div>
        )

    }
}


export default MovieRented;
