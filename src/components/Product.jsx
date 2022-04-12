import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

function Product() {
    const { id } = useParams();
    console.log("id", id);
    const [product, setProduct] = useState();
    const fetchSinfleProduct = () => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res => res.json())
            .then(json => setProduct(json))
    };
    useEffect(() => {
        fetchSinfleProduct();
    }, [])

    return (
        <>
            {product ?
                <>
                    <div key={id} className="card col-3 mx-auto py-3 my-2 text-center ">
                        <img className="card-img-top w-50 mx-auto" src={product.image} ></img>
                        <div className="card-body">
                            <h4 className="card-title text-primary">{product.title}</h4>
                            <h3 className="card-text">{product.price}</h3>
                        </div>
                    </div>
                    <p className="card-text mx-auto text-center py-3 px-5 w-50">{product.description}</p>
                </>
                :
                <div className=" my-5  d-flex justify-content-center">
                    <div className="spinner-border " role="status"></div>
                </div>
            }
        </>
    );
}

export default Product;