import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieReviews } from "API/API";
import css from './Reviews.module.css';

const Reviews = () => {
    const [movieReviews, setMovieReviews] = useState([]);
    const { movieId } = useParams();

    useEffect(() => {
        fetchMovieReviews(movieId).then(({ results }) => {
            setMovieReviews(results);
        })
    }, [movieId]);

    return (
        <>
            {movieReviews.length > 0 ? (
                movieReviews.map(({ id, author, content }) => {
                    return (
                        <ul className={css.reviewCard} key={id}>
                            <li>
                                <b>Author: {author}</b>
                            </li>
                            <li>{content}</li>
                        </ul>
                    )
                })
            ) : (
                <p>Sorry, we don't have any reviews for this movie</p>
            )}
        </>
    )
}

export default Reviews;