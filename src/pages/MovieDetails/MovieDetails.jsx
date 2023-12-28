import { useEffect, useState } from "react";
import { Outlet, useLocation, useParams, Link } from "react-router-dom";
import { fetchMovieDetails } from "API/API";
import ButtonBack from "components/ButtonBack/ButtonBack";

import css from './MovieDetails.module.css';


const MovieDetails = () => {
    const [movieDetails, setMovieDetails] = useState({});

    const { movieId } = useParams();
    const location = useLocation();
    const buttonBack = location.state?.from ?? `/`;

    useEffect(() => {
        fetchMovieDetails(movieId).then(setMovieDetails);
    }, [movieId]);

    const { poster_path, title, genres, overview, vote_average, release_date } = movieDetails;

    return (
        <>
        <ButtonBack to={buttonBack} />
        <div className={css.movieDetails__container}>
            {poster_path && (
                <img
                className={css.img}
                src={`https://image.tmdb.org/t/p/w300${poster_path}`}
                alt={title}
                />
            )}

            <div className={css.movieDetails__info}>
                {title && (
                    <h1 className={css.movieDetails__title}>
                        {title} {release_date.substr(0, 4)}
                    </h1>
                )}
                <p className={css.movieDetails__score}>User Score: {vote_average && Math.floor(vote_average * 10)}%</p>
                <h2 className={css.movieDetails__subtitle}>Overview</h2>
                <p className={css.movieDetails__text}>{overview}</p>
                <h2 className={css.movieDetails__subtitle}>Genres</h2>
                {genres && <p className={css.movieDetails__text}>{genres.map(({ name }) => name).join(', ')}</p>}
            </div>
        </div>

            <>
                <ul className={css.movieDetails__nav}>
                    <Link to="cast">Cast</Link>
                    <Link to="reviews">Reviews</Link>
                </ul>
            </>
            <Outlet />
        </>
    );
}

export default MovieDetails;