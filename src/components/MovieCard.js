import React from 'react'
import {addFavorite, removeFromFavorites} from '../actions';
class MovieCard extends React.Component{
    handleFavoriteclick=()=>{
        const {movie}=this.props;
        this.props.dispatch(addFavorite(movie))
    }
    handleUnFavoriteclick=()=>{
        const {movie}=this.props;
        this.props.dispatch(removeFromFavorites(movie));

    }
    render(){
        const {movie,isFavorite}=this.props;
        return (
            <div className="movie-card">
               <div className="left">
                   <img alt="movie-poster" src={movie.Poster}/>
                   </div>
                   <div className="right">
                       <div className="title">{movie.Title}</div>
                       <div className="plot">{movie.Plot}</div>
                       <div className="footer">
                           <div className="rating">{movie.imdbRating}</div>
                           {
                               isFavorite?
                               <button className="unfavorite-btn" onClick={this.handleUnFavoriteclick} >Unfavorite</button>:
                               <button className="favorite-btn" onClick={this.handleFavoriteclick} >Favorite</button>
                           }
                          
                       </div>
                   </div>
            </div>
        );
    }
}
export default MovieCard; 