import ProductCategoryRow from "./ProductCategoryRow";
import PropTypes from 'prop-types';
import ProductRow from "./ProductRow";
import React from "react";

function ProductTable({products}) {
    const categories = [ ];
        products.forEach(product => {
            const category = product.category;
            if (categories.indexOf(category) === -1) {
                categories.push(category);

            }
            
        });
   


    return (
        <table className="w-full">
            <tbody>
            <tr>
                <th className="p-2">Name</th>
                <th className="p-2">Price</th>
            </tr>
            
            {
                categories.map((category, index) => (
                    <React.Fragment key={index}>
                    <ProductCategoryRow key={index} category={category} />
                    {
                        products.filter(product => product.category === category).map((product, index) => (
                            <ProductRow
                            key={index} 
                            name={product.name} 
                            price={product.price} 
                                stocked={product.stocked}
                                />
                        ))
                    }
                    </React.Fragment>
                ))
            }
            </tbody>
        </table>
    )
}

ProductTable.propTypes ={
    products: PropTypes.any

}
export default ProductTable;







