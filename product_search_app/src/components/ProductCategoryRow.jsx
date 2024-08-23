function ProductCategoryRow({category}) {
    return (
        <tr>
            <th className="px-3 py-2 border-b border-b-slate-100" colSpan={2}>{category}</th>
        </tr>
    )
}

export default ProductCategoryRow;