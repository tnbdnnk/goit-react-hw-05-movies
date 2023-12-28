import { useState } from "react";
import { toast } from "react-toastify";
import { notify } from "components/Notify/Notify";
import { AiOutlineSearch } from "react-icons/ai";
import css from './SearchForm.module.css';


const SearchForm = ({ onSearch }) => {
    const [query, setQuery] = useState('');

    const changeQuery = e => {
        setQuery(e.target.value.toLowerCase());
    }

    const handleSubmit = e => {
        e.preventDefault();
        if (!query) return toast.error('Please enter something', notify);
        onSearch(query);
        setQuery('');
    }

    return (
        <>
            <form className={css.searchForm} onSubmit={handleSubmit}>
                <input
                    className={css.searchInput}
                    type="text"
                    placeHolder="Search movies"
                    name="query"
                    value={query}
                    onChange={changeQuery}
                />
                <button className={css.searchButton} type="submit">
                    <AiOutlineSearch size="15"/>
                </button>
            </form>
        </>
    )
}

export default SearchForm;