import { Outlet, NavLink } from 'react-router-dom';
import css from './Layout.module.css';

const Layout = () => {
    return (
        <div className={css.container}>
            <header className={css.header}>
            <nav className={css.header__nav}>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/movies">Movies</NavLink>
            </nav>
            </header>
            <Outlet />
        </div>
    );
};

export default Layout;