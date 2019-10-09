import React, { Component } from 'react';
import Movie from './Movie';
import MovieRented from './MovieRented';


class Catalog extends Component {


    render() {

        let movies = this.props.state.movies

        return (
            <div id="Catalog">

                <div id="budget">
                    Budget : ${this.props.state.budget}
                </div>
                <input type="text" placeholder="What movie are you looking?" />
                <button>Search</button>
                

                {movies.map((m, index) => {
                    return (m.isRented ? 
                    <MovieRented movies={m} isRented={this.props.isRented} key={index} /> :
                    null)
                })}
                <hr/>
                {movies.map((m, index) => {

                    return <Movie movies={m} isRented={this.props.isRented} key={index} />
                })
                }

            </div>)
    }
}

export default Catalog 