import PropTypes from "prop-types";
import { useId } from "react";

SearchToDo.propTypes = {
    searchValue: PropTypes.string,
    setSearchValue: PropTypes.func,
};

export default function SearchToDo({ searchValue, setSearchValue }) {
    const htmlFor = useId();

    return (
        <label htmlFor={htmlFor}>
            <span className="text-gray-700">Пошук</span>
            <input type="text"
                name="search"
                id={htmlFor}
                className="mt-1 block w-full border-4 border-indigo-500/100"
                placeholder="search"
                value={searchValue}
                onChange={(e) => { setSearchValue(e.target.value); }}
            />
        </label>
    );
}
