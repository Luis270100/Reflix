import React, { Component } from 'react';
import Movie from './Movie';


class Catalog extends Component {
    constructor() {
        super()
        this.state = {
            budget: 20
        }
    }

    UpdateBudget = (money) => {
        this.setState({
            budget : this.state.budget + money
        })
    }

    rentMovie = ()=>{
        let budget = [...this.state.budget]



        
    }


    render() {

        let movies = this.props.movies
        return (
            <div id="Catalog">
                <div id="budget">
                    Budget : {this.state.budget}
                </div>
                <input type="text" placeholder="What movie are you looking?" />
                <button>Search</button>
                <Movie movies={movies} />

            </div>)
    }
}

export default Catalog 