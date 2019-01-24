const request = (url, options) => {
    console.log('----API Request');
    console.log(url);
    console.log(options);
    return fetch(url, options)
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            if (response.status === 422) {
                throw response.json();
            }
            return null;
        }).catch(error => {
            console.log(error);
        });
};

export const fetchPopularAPI = () => {
    const url = 'http://api.themoviedb.org/3/movie/popular?page=1&language=en-US&api_key=86a0cc65bd11ce357432bd2e5f88f82c';
    return request(url, { method: 'GET' });
};

export const fetchSimilarAPI = (movieId) => {
    const url = 'https://api.themoviedb.org/3/movie/' + movieId + '/similar?page=1&language=en-US&api_key=86a0cc65bd11ce357432bd2e5f88f82c';
    return request(url, { method: 'GET' });
};