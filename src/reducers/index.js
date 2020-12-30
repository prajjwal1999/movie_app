import {ADD_FAVORITE, ADD_MOVIES, REMOVE_FROM_FAVORITES,SET_SHOW_FAVORITES} from '../actions/index'
const initialMoviesState={
    list:[],
    favorites:[],
    showFavorites:false
}
export default function movies(state=initialMoviesState,action){
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
                default:
                    return state;
    }
}
