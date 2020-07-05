import React, { Component } from "react";
import "../Public/css/MovieDetail.css";

class MovieDetails extends Component {
  render() {
    let id = this.props.match.params.id;
    let movies = [this.props.movies[id]];

    return (
      <div className="MovieDetails">
        {movies.map((m, index) => {
          return (
            <div key={index} id="description-container">
              <img src={m.img} alt={m.title} id="movieImage" />
              <div className="description">
                <h1 id="heading-description">
                  {m.title} ({m.year})
                  <p id="movie-description">{m.descrShort}</p>
                </h1>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default MovieDetails;
