import PropTypes from 'prop-types';

function SearchBar({handleCheckBox, handleSearch}) {
    return (
        <form className="flex flex-col gap-2 mb-4 bg-slate-100 p-3 rounded-md">
            <input onChange={handleSearch} type="search" className="border text-xl w-full p-2 rounded-md" placeholder="Search..." />
            <label htmlFor="inStock">
                <input onClick={handleCheckBox} className='mr-2' type="checkbox" name="inStock" id="inStock" />
                Only search products in stock
            </label>
        </form>
    );
}

SearchBar.propTypes = {
    handleCheckBox: PropTypes.any,
    handleSearch: PropTypes.any
}
export default SearchBar;