import { useState } from "react";

import ProductTable from "./ProductTable";
import SearchBar from "./SearchBar";

function FilterableProductTable() {
    const [inStock, setInStock] = useState(false);
    const [query, setQuery] = useState('');

    function handleCheckBox(event) {
        const isChecked = event.target.checked;
        setInStock(isChecked);
    }

    function handleSearch(event) {
        const searchQuery =  event.target.value;
        setQuery(searchQuery);
    }

    const products = [
        { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
        { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
        { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
        { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
        { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
        { category: "Vegetables", price: "$1", stocked: true, name: "Peas" },
        { category: "Electronics", price: "$2000", stocked: true, name: "iPhone" },
        { category: "Electronics", price: "$1600", stocked: false, name: "iMac" }
      ];

    const filteredProducts = products
        .filter(product => inStock ? product.stocked: true)
        .filter(product => product.name.toLowerCase().startsWith(query.toLowerCase()) );
    return (
        <div className="w-96 border rounded-md bg-white p-4 shadow">
            <h2 className="text-2xl mb-2 font-bold">Product Search App</h2>
            <SearchBar handleCheckBox={handleCheckBox} handleSearch={handleSearch} />
            <ProductTable products={filteredProducts} />
        </div>
    )
}

export default FilterableProductTable;