import PropTypes from 'prop-types';
import { Outlet, useLocation, Link } from 'react-router-dom';
import { AiOutlineFileImage } from 'react-icons/ai';

import css from './MoviesList.module.css';

const MoviesList = ({ movies }) => {
    const location = useLocation();
    return (
        <>
            <ul className={css.moviesList}>
                {movies.map(({ id, title, poster_path }) => {
                    return (
                        <li className={css.moviesList__item} key={id}>
                            <Link
                                className={css.moviesList__link}
                                href=''
                                to={`/movies/${id}`}
                                state={{ from: location }}
                            >
                                <div className={css.moviesList__card}>
                                    {poster_path ? (
                                        <img 
                                            className={css.moviesList__img}
                                            src={`https://image.tmdb.org/t/p/w200${poster_path}`}
                                            alt={title}
                                        />
                                    ) : (
                                        <AiOutlineFileImage size={200}/>
                                    )}
                                    <h3 className={css.moviesList__title}>{title}</h3>
                                </div>
                            </Link>
                        </li>
                    )
                })}
            </ul>
            <Outlet/>
        </>
    )
}

MoviesList.propTypes = {
    movies: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
        })
    )
}

export default MoviesList;