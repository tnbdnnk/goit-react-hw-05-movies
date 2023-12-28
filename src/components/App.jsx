import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Suspense, lazy } from 'react';

import Layout from './Layout/Layout';

const Home = lazy(() => import('pages/Home'))
const Movies = lazy(() => import('pages/Movies'))
const MovieDetails = lazy(() => import('pages/MovieDetails/MovieDetails'))
const Cast = lazy(() => import('components/Cast/Cast'))
const Reviews = lazy(() => import('components/Reviews/Reviews'))

export const App = () => {
    return (
        <>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path='/' element={<Layout />}>
                        <Route index element={<Home/>} />
                        <Route path='movies' element={<Movies/>} />
                        <Route path='movies/:movieId' element={<MovieDetails/>}>
                            <Route path='cast' element={<Cast/>} />
                            <Route path='reviews' element={<Reviews/>} />
                        </Route>
                    </Route>
                    <Route />
                </Routes>
                <ToastContainer/>
            </Suspense>
        </>
    )
}