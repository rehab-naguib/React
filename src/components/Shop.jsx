import { useState } from 'react';
import { useEffect } from 'react';
import {Link} from 'react-router-dom'
function Shop() {
    const [products, setProducts] = useState([]);
    const fetchAllProduct = () => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => setProducts(json))
    };

    useEffect(() => {
        fetchAllProduct();
    }, []);
    return (
        <div className='row my-2 text-center  d-flex justify-content-center'>
            {
                products && products.length ?
                    products.map(product => {
                        return <div key={product.id} className="card col-3 mx-2 py-3 my-2">
                            <img className="card-img-top w-25 mx-auto" src={product.image}></img>
                            <div className="card-body">
                                <h5 className="card-title">{product.title}</h5>
                                <p className="card-text">{`${product.description.substring(0,200)}`}</p>
                                <Link to={`/shop/${product.id}`} className="btn btn-primary">Show Details</Link>
                            </div>
                        </div>
                    })
                    :
                    <div className="spinner-border " role="status">
                    </div>
            }

        </div>

    );
}

export default Shop;