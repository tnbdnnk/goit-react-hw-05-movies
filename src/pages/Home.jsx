import { useState, useEffect } from "react";
import { fetchTrendingMovies } from "API/API";
import MoviesList from "components/MoviesList/MoviesList";
import Title from "components/Title/Title";
import Loader from "components/Loader/Loader";

const Home = () => {
    const [movies, setMovies] = useState([]);
    const [loader, setLoader] = useState(false);

    useEffect(() => {
        setLoader(true);
        fetchTrendingMovies()
            .then(({ results }) => {
                setMovies(results);
            })
            .finally(() => {
                setLoader(false);
            });
    }, []);

    return (
        <>
            <Title title="Trending today" />
            <MoviesList movies={movies} />
            {loader && <Loader/>}
        </>
    )
}

export default Home;