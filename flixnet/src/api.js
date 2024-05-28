const API_KEY = 'af87b78c158cb90b0c08fd2f645ab0de';
const LANG = 'it';
const PARAMS = `language=${LANG}&api_key=${API_KEY}`;
const BASE_URL = 'https://api.themoviedb.org/3/';

const fetchMovies = async (endpoint) => {
    const request = await fetch(`${BASE_URL}${endpoint}${PARAMS}`);
    const data = await request.json();
    return data;
}

export default {
    getHomeMovies: async () => {
        return [
            {
                title: 'I titoli del momento',
                movies: await fetchMovies('trending/all/week?')
            },
            {
                title: 'Solo su Flixnet',
                movies: await fetchMovies('discover/tv?with_network=213&')
            },
            {
                title: 'I più popolari su Flixnet',
                movies: await fetchMovies('movie/top_rated?')
            },
            {
                title: 'Azione',
                movies: await fetchMovies('discover/movie?with_genres=28&')
            },
            {
                title: 'Commedia',
                movies: await fetchMovies('discover/movie?with_genres=35&')
            },
            {
                title: 'Documentari',
                movies: await fetchMovies('discover/movie?with_genres=99&')
            },
            {
                title: 'Horror',
                movies: await fetchMovies('discover/movie?with_genres=27&')
            },
            {
                title: 'Romantici',
                movies: await fetchMovies('discover/movie?with_genres=10749&')
            }
        ]
    }
}