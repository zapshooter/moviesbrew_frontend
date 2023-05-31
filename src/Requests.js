const key = 'f7b02e321e0db4634857e36f8817ea05'

const requests = {
    requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
    requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
    requestTrending: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=2`,
    requestHorror: `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=horror&page=1&include`,
    requestUpcoming:   `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`,
    };

    export default requests
