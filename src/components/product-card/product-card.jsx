import React from "react";
import style from "./product-card.module.scss";
import rating from "../../assets/rating.svg";
import discount from "../../assets/discount.svg";
import { CartBtn } from "../../assets/icons/cartbtn";

export const ProductCard = ({id, img, title, info, prise}) => {
    return (
        <div className={style.card}>
            <img src={img} alt="imag" />
            <h3 className={style.title}>{title}</h3>
            <p className={style.info}>{info}</p>
            <img src={rating} alt="icon" />
            <p className={style.price}>{prise}</p>
            <img src={discount} alt="icon" />
            <div className={style.btn_block}>
                <a className={style.btn} href="#">Купить в 1 клик</a>
                <CartBtn />
            </div>
        </div>
    )
}