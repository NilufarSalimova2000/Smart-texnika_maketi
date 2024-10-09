import React from "react";
import style from "./product-detail.module.scss";
import { useParams } from "react-router-dom";
import { data } from "../../data/data";
import Imag from "../../assets/img/product_detail.png";
import Rating from "../../assets/rating.svg";
import like from "../../assets/like.svg";
import discount from "../../assets/discount.svg";

export const ProductDetail = () => {
    const { id } = useParams();

    const product = data.find((item) => item.id === parseInt(id));

    return (
        <div className="container">
            {product ? (
                <div className={style.wrapper}>
                    <img src={Imag} alt="imag" />
                    <div className={style.info_block}>
                        <p className={style.info}>{product.info}</p>
                        <div className={style.block}>
                            <div className={style.inner_block}>
                                <img src={Rating} alt="icon" />
                                <img src={like} alt="icon" />
                            </div>
                            <div className={style.btn_block}>
                                <div>
                                    <div className={style.block2}>
                                        <p className={style.sale_price}>5 400 ₽</p>
                                        <img src={discount} alt="icon" />
                                    </div>
                                    <p className={style.price}>{product.prise}</p>
                                </div>
                                <a className={style.btn} href="#">В корзину</a>
                                <a className={style.btn2} href="#">Купить в 1 клик</a>
                            </div>
                        </div>
                        <div className={style.text_block}>
                            <div>
                                <h3 className={style.sub_title}>Доставка</h3>
                                <p className={style.text}>Доставим по Санкт-Петербургу в течение 2 часов и бесплатно. Стоимость доставки в другие города уточняйте у менеджера.</p>
                            </div>
                            <div>
                                <h3 className={style.sub_title}>Оплата</h3>
                                <p className={style.text}>Принимаем к оплате как наличный, так и безналичный расчёт. Возможна оплата электронными кошельками.</p>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <p></p>
            )}
        </div>
    )
}