
function SearchBar({handleCheckBox, handleSearch}) {
    return (
        <form className="p-4">
            <div style= {{alignContent:"center"}}><input type="search" onChange={handleSearch} className="border text-2xl" placeholder="Search..." /></div>
            <label htmlFor="inStock">
                <input onClick={handleCheckBox} type="checkbox" name="inStock" id="inStock" />
                Only search products in stock
            </label>
        </form>
    );
}

export default SearchBar;