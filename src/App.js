import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Home } from '../src/Components/Home'
import Catalog from '../src/Components/Catalog'
import MovieDetail from './Components/MovieDetail'
import './App.css';
import './Public/css/Navbar.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      users: [
        { name: "Luis", color: "blue" },
        { name: "Rebeca", color: "red" },
        { name: "Claudia", color: "green" }
      ],
      movies: [
        { id: 0, isRented: false, title: "Tarzan", year: 1999, img: "https://vignette.wikia.nocookie.net/disney-fan-fiction/images/4/42/Tarzan_2004_cover.jpg/revision/latest?cb=20140331030811", descrShort: "Tarzan was born into wealth but raised into incredible misfortune. Shiprweck, parents mauled by a jaguar. Luckily, a troop of gorillas took him in, but the Big Daddy gorilla never took a liking to him. That is, until the end when it's too late. Why is it too late? Watch and find out." },
        { id: 1, isRented: false, title: "The Lion King", img: "https://img00.deviantart.net/b782/i/2006/207/e/7/the_lion_king_front_cd_cover_by_peachpocket285.jpg", year: 1994, descrShort: "A young lion prince named Simba is born into wealth but raised into incredible misfortune. Trickster uncle, dying father, usurpation. Luckily, an unlikely meerkat-warthog pair take him in and teach him The Ways of the Bum Life. Be prepared for ghostly hallucinations, wild baboons, creepy crawlies." },
        { id: 2, isRented: false, title: "Beauty and the Beast", year: 1991, img: "https://images-na.ssl-images-amazon.com/images/I/81etFyb9N-L._SL1500_.jpg", descrShort: "A kickass woman named Belle who does not succumb to social norms gets crap from a bunch of village idiots, chief amongst them a total tool named Gaston. Belle shows everyone how great she is when she turns a beast (not Gaston) into a man. Love ensues, but then the villagers fall trap to severe group-think mentality led by the main tool himself." },
        { id: 3, isRented: false, title: "The Sword in the Stone", year: 1963, img: "https://www.disneyinfo.nl/images/laserdiscs/229-1-AS-front.jpg", descrShort: "Arthur is a young boy who just wants to be a knight's squire. Alas, he is dubbed 'Wart' early on, and it was all downhill from there for a while. On a hunting trip he falls in on Merlin, literally. Merlin is a possibly-mentally-unstable-and-ethically-dubious Wizard that turns Arthur into a literate, at-one-point harassed squirrel. Watch to find out what the heck that means." },
        { id: 4, isRented: false, title: "Beauty and the Beast", year: 2016, img: "https://images-na.ssl-images-amazon.com/images/I/51ArFYSFGJL.jpg", descrShort: "Basically the same as the original, except now Hermi-- Emma Wattson plays Belle, fittingly so some would say, given how actively progressive she is regarding women's rights. Rumor has it that in the bonus scenes she whips out a wand and turns Gaston into a toad, but in order to watch those scenes you need to recite a certain incantation." }
      ],
      budget: 20,
      Rented: []
    }
  }



  UpdateBudget = budget => {

      this.setState({
        budget: this.state.budget + budget
      }) 
  }

  isRented = movieId => {

    let movies = [...this.state.movies]
    movies[movieId].isRented ? movies[movieId].isRented = false : movies[movieId].isRented = true

    let budget = movies[movieId].isRented ? -6 : 6

    this.setState({
      movies
    }, () => this.UpdateBudget(budget))
  }




  render() {
    return (
      <Router>
        <div className="container">
          <div id="navbar">
            <div className="link-div">
              <Link to="/" className="link">Home</Link>
            </div>
            <div className="link-div">
              <Link to="/catalog" className="link">Catalog</Link>
            </div>
            <div className="link-div" id="Logo">
            </div>
          </div>

          {/* Routes here˘ */}
          <Route path="/" exact render={() => <Home users={this.state.users} />} />
          <Route path="/catalog" exact render={() => <Catalog state={this.state} isRented={this.isRented} />} />
          <Route path="/movies/:id" exact render={({ match }) => <MovieDetail match={match} movies={this.state.movies} />} />

        </div>
      </Router>
    )
  }
}

export default App;
