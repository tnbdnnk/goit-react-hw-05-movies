import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieCast } from "API/API";
import { AiOutlineFileImage } from "react-icons/ai";
import css from './Cast.module.css';

const Cast = () => {
    const [movieCast, setMovieCast] = useState([]);
    const { movieId } = useParams();

    useEffect(() => {
        fetchMovieCast(movieId).then(({ cast }) => {
            setMovieCast(cast);
        })
    }, [movieId]);

    return (
        <div className={css.cast__container}>
            {movieCast.length > 0 ? (
                movieCast.map(({ id, profile_path, character, name }) => (
                    <div className={css.cast__card} key={id}>
                        {profile_path ? (
                            <img
                            src={`https://image.tmdb.org/t/p/w200${profile_path}`}
                            alt={name}
                            />
                        ) : (
                            <AiOutlineFileImage size={200} />
                        )}
                        <p className={css.cast__name}>{name}</p>
                        <p className={css.cast__character}>
                            Character : {character.substr(0, 9)}
                        </p>
                    </div>
                ))
            ) : (
                <p className={css.cast__paragrapf}>Sorry, there isn't any info</p>
            )}
        </div>
    );
}
export default Cast;