import { combineReducers } from 'redux';
import {ADD_FAVORITE, ADD_MOVIES, ADD_MOVIE_TO_LIST, ADD_SEARCH_RESULT, REMOVE_FROM_FAVORITES,SET_SHOW_FAVORITES} from '../actions/index'
const initialMoviesState={
    list:[],
    favorites:[],
    showFavorites:false
}
export function movies(state=initialMoviesState,action){
    // if(action.type===ADD_MOVIES)
    // {

    //     return {
    //         ...state,
    //         list:action.movies
    //     }
    // }
    
    //     return state;
    switch(action.type){
        case ADD_MOVIES:
            return{
                ...state,
                list:action.movies
            }
            case ADD_FAVORITE:
                return{
                    ...state,
                    favorites:[action.movie, ...state.favorites]
                }
            case REMOVE_FROM_FAVORITES:
                const filteredArray=state.favorites.filter(
                    movie=>movie.Title!==action.movie.Title
                );
                return{
                    ...state,
                    favorites:filteredArray

                };
            case SET_SHOW_FAVORITES:
                return{
                    ...state,
                   showFavorites: action.val
                }
                case ADD_MOVIE_TO_LIST:
                    return{
                        ...state,
                        list:[action.movie,...state.list]
                    }
                default:
                    return state;
    }
}

const initialSearchState={
    result:{},
    showSearchResults:false
};
export function search(state=initialSearchState,action){
    
    switch(action.type){
        case ADD_SEARCH_RESULT:
            return{
                ...state,
                result:action.movie,
                showSearchResults:true
            }
            case ADD_MOVIE_TO_LIST:
                return{
                    ...state,
                   showSearchResults:false
                }
            default:
                return state
    }
    
}
// const initialRootState={
//     movies:initialMoviesState,
//     search:initialSearchState
// }
// export default function rootReducers(state=initialRootState,action)
// {
//     return{
//         movies:movies(state.movies,action),
//         search:search(state.search,action)
//     }
// }
export default combineReducers({
    movies,
    search
});