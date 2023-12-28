import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const API_KEY = '4c96e6efd75936529d8a819bda84e228';

export const fetchTrendingMovies = async () => {
    const res = await axios.get(`trending/movie/day?api_key=${API_KEY}`);
    return res.data;
};

export const fetchSearchMovies = async query => {
    const res = await axios.get(
        `search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${query}`
    );
    return res.data;
};

export const fetchMovieDetails = async movieId => {
    const res = await axios.get(
        `movie/${movieId}?api_key=${API_KEY}&language=en-US`
    );
    return res.data;
};

export const fetchMovieCast = async movieId => {
    const res = await axios.get(
        `movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
    );
    return res.data;
};

export const fetchMovieReviews = async movieId => {
    const res = await axios.get(
        `movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`
    );
    return res.data;
};

// import axios from "axios";

// const apiKey = '4c96e6efd75936529d8a819bda84e228';
// const baseUrl = 'https://api.themoviedb.org/3/';

// export const fetchTrendingMovies = async () => {
//     try {
//         const res = await axios.get(
//             `${baseUrl}/trending/movie/day?api_key=${apiKey}`
//         );
//         return res.data.results;
//     } catch (error) {
//         console.error('Error fetching trending movies:', error);
//         return [];
//     }
// }

// export const fetchSearchMovies = async query => {
//     try {
//         const res = await axios.get(
//             `${baseUrl}/search/movie?api_key=${apiKey}&query=${query}`
//         )
//         return res.data.results;
//     } catch (error) {
//         console.error('Error searching movies:', error);
//         return [];
//     }
// }

// export const fetchMovieDetails = async movieId => {
//     try {
//         const res = await axios.get(
//             `${baseUrl}/trending/${movieId}?api_key=${apiKey}`
//         )
//         return res.data;
//     } catch (error) {
//         console.error('Error fetching movie details:', error);
//         return [];
//     }
// }

// export const fetchMovieCast = async movieId => {
//     try {
//         const res = await axios.get(
//             `${baseUrl}/trending/${movieId}/credits?api_key=${apiKey}`
//         );
//         return res.data.cast;
//     } catch (error) {
//         console.error('Error fetching movie credits:', error);
//         return [];
//     }
// }

// export const fetchMovieReviews = async movieId => {
//     try {
//         const res = await axios.get(
//             `${baseUrl}/trending/${movieId}/reviews?api_key=${apiKey}`
//         );
//         return res.data.results;
//     } catch (error) {
//         console.error('Error fetching movie reviews:', error);
//         return [];
//     }
// }
