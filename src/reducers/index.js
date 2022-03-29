import { ADD_MOVIES } from "../actions";

const intitialMoviesState = {
    list: [],
    favourites: [],
};

export default function movies(state = intitialMoviesState, action) {
    if (action.type === ADD_MOVIES) {
        return { ...state, list: action.movies };
    }
    return state;
}
