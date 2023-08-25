// main aim is to put requests so requests.js create then 1.API key and 2.Request key-object needed

// 1. my API key from TMDB(The movie data base)
const API_KEY = "cfe8403b6c1d910bda494c61576c8349";

// 2. create normal object - it is to create d/t key or url on netflix original and trending now &.... finaly integrete with axios so create axios.js on src folder to do.
const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRatedMovies: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
    //by myself

};

export default requests;