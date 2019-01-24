import {
    fetchPopularAPI,
    fetchSimilarAPI
} from './api';

const moviesLoaded = (movies) => ({
    type: "moviesChanged",
    movies
});

export const fetchPopular = () => (dispatch) => fetchPopularAPI()
    .then((success) => {
        dispatch(moviesLoaded(success.results));
    }).catch((error) => {
        console.log(error);
    });

export const fetchSimilar = (movie) => (dispatch) => fetchSimilarAPI(movie.id)
    .then((success) => {
        dispatch(moviesLoaded(success.results));
    }).catch((error) => {
        console.log(error);
    });