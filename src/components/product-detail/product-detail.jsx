import React from "react";
import style from "./product-detail.module.scss";
import { useParams } from "react-router-dom";
import { data } from "../../data/data";

export const ProductDetail = () => {
    const {id} = useParams();

    const product = data.find((item) => item.id === parseInt(id));
    
    return (
        <div className="container">
            {product ?(
                <div>
                    <img src={product.img} alt="imag" />
                    <h3>{product.title}</h3>
                    <p>{product.info}</p>
                </div>
            ): (
                <p></p>
            )}
        </div>
    )
}