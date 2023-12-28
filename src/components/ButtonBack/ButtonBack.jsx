import { Link } from 'react-router-dom';
import { FiArrowLeftCircle } from 'react-icons/fi';
import css from './ButtonBack.module.css';

const ButtonBack = ({ to }) => {
    return (
        <Link className={css.linkBack} to={to}>
            <button className={css.buttonBack} type="button">
                <FiArrowLeftCircle /> Go back
            </button>
        </Link>
    );
};

export default ButtonBack;
