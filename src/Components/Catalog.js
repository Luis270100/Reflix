import React, { Component } from "react";
import Movie from "./Movie";
import MovieRented from "./MovieRented";
import "../Public/css/Catalog.css";

class Catalog extends Component {
  render() {
    let movies = this.props.state.movies;

    return (
      <div id="Catalog">
        <div className="search-bar">
          <div id="budget-div">
            <p className="budgetText">Budget :</p>
            <p className="budget">${this.props.state.budget}</p>
          </div>
          <div className="search-container">
            <input
              type="text"
              placeholder="What movie are you looking?"
              id="search-input"
            />
            <button id="search-btt">Search</button>
          </div>
        </div>

        <div className="rentedimage-container">
          {movies.map((m, index) => {
            return m.isRented ? (
              <MovieRented
                movies={m}
                isRented={this.props.isRented}
                key={index}
              />
            ) : null;
          })}
        </div>
        <hr />
        <div className="movie-container">
          {movies.map((m, index) => {
            return (
              <Movie movies={m} isRented={this.props.isRented} key={index} />
            );
          })}
        </div>
      </div>
    );
  }
}

export default Catalog;
