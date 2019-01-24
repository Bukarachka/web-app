import createReducer from './create_reducer';

const getDefaultState = () => ({
        movies: []
});

const moviesReducer = createReducer(getDefaultState(), {
    "moviesChanged": (state, { movies }) => ({
        ...state,
        movies
    })
});

export default moviesReducer;