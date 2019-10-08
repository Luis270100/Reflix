import React, { Component } from 'react';
import { directive } from '@babel/types';

class MovieDetails extends Component {

    render() {
        let id = this.props.match.params.id
        let movies = [this.props.movies[id]]

        return (
            <div className="MovieDetails">

                {movies.map((m, index) => {
                    return (
                        <div key={index}>
                            <h3>{m.title} ({m.year})</h3>
                            <img src={m.img} alt={m.title} />
                            <p>{m.descrShort}</p>
                        </div>
                    )
                })}
                
            </div>
        )
    }
}

export default MovieDetails