import React from "react";
import Navbar from "./Navbar";
import MovieCard from "./MovieCard";
import { data } from "../data";
import { render } from "@testing-library/react";
import { addMovies, setShowFavorites } from "../actions";
import { StoreContext } from "../index";
class App extends React.Component {
  componentDidMount() {
    const { store } = this.props;
    store.subscribe(() => {
      console.log("UPDATED");
      this.forceUpdate();
    });
    store.dispatch(addMovies(data));
    console.log("state", this.props.store.getState());
  }
  isMovieFavorite = (movie) => {
    const { movies } = this.props.store.getState();
    const index = movies.favorites.indexOf(movie);
    if (index !== -1) {
      return true;
    }
    return false;
  };
  onChangeTab = (val) => {
    this.props.store.dispatch(setShowFavorites(val));
  };

  render() {
    const { movies, search } = this.props.store.getState();
    const { list, favorites, showFavorites } = movies;

    console.log(this.props.store.getState());
    const displayMovies = showFavorites ? favorites : list;
    return (
      <StoreContext.Consumer>
        {(store) => {
          return (
            <div className="App">
              <Navbar dispatch={this.props.store.dispatch} search={search} />
              <div className="main">
                <div className="tabs">
                  <div
                    className={`tab ${showFavorites ? "" : "acive-tabs"}`}
                    onClick={() => this.onChangeTab(false)}
                  >
                    Movies
                  </div>
                  <div
                    className={`tab ${showFavorites ? "acive-tabs" : ""}`}
                    onClick={() => this.onChangeTab(true)}
                  >
                    Favorite
                  </div>
                </div>
                <div className="list">
                  {displayMovies.map((movie, index) => (
                    <MovieCard
                      movie={movie}
                      key={"movies-${index}"}
                      dispatch={this.props.store.dispatch}
                      isFavorite={this.isMovieFavorite(movie)}
                    />
                  ))}
                </div>
                {displayMovies.length === 0 ? (
                  <div className="no-movies">No movies to display..!!</div>
                ) : null}
              </div>
            </div>
          );
        }}
      </StoreContext.Consumer>
    );
  }
}

export default App;
