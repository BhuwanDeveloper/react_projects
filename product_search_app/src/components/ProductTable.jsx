import PropTypes from 'prop-types';
import React from 'react';
import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";

function ProductTable({ products }) {
    const categories = [];
    products.forEach((product) => {
        const category = product.category;
        if (categories.indexOf(category) === -1) {
            categories.push(category);
        }
    });

    return (
        <table className="w-full">
            <tbody>
            <tr>
                <th className="px-3 py-2 text-left bg-slate-100">Name</th>
                <th className="px-3 py-2 text-right bg-slate-100">Price</th>
            </tr>

            {
                categories.map((category, index) => (
                    <React.Fragment key={index}>
                        <ProductCategoryRow 
                            category={category} />
                        {
                            products.filter(product => 
                                product.category === category
                            )
                                .map((product, index) =>
                                    <ProductRow 
                                        key={index} 
                                        name={product.name} 
                                        price={product.price} 
                                        stocked={product.stocked} 
                                    />)
                        }
                    </React.Fragment>
                ))
            }
            </tbody>
        </table>
    )
}

ProductTable.propTypes = {
    products: PropTypes.any
}
export default ProductTable;