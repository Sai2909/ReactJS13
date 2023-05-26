export function DataBindingArrayComponent(){
    var categories = ["All", "Electronics", "Footwear", "Fashion"];
    return(
        <div className="container">
            <h2>Categories</h2>
            <ol>
                {
                    categories.map(category=>
                        <li>{category}</li>
                        )
                }
            </ol>
            <h2>Select Category</h2>
            <select>
                {
                    categories.map(category=>
                         <option value={category}>{category}</option>
                        )
                }
            </select>
        </div>
    )

}