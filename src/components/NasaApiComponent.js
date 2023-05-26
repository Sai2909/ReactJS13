import { useState, useEffect } from "react";

export default function DataComponent() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(data => {
                setProducts(data);
            })
    }, [])
    return (
        <div className="container">
            <h2>Fake Store Api</h2>
            <div className="d-flex flex-wrap">
                {
                    products.map(product =>
                        <div className="card p-2 m-2 w-25 " key={product.image}>
                            <img key={product.image} src={product.image} width="200" height="200" />
                            <p key={product.title}>{product.title}</p>
                        </div>
                    )
                }
            </div>
        </div>
    )
}
