import PropTypes from 'prop-types';

function ProductRow({ name, price, stocked }) {
    return (
        <tr className={stocked ? "text-black" : "text-red-500"}>
            <td className='px-3 py-2 border-b border-b-slate-100'>{name}</td>
            <td className='px-3 py-2 text-right border-b border-b-slate-100'>{price}</td>
        </tr>
    )
}

ProductRow.propTypes = {
    name: PropTypes.string,
    price: PropTypes.string,
    stocked: PropTypes.bool
}

export default ProductRow;