import React from "react";
import style from "./banner.module.scss";
import imag from "../../assets/img/pngwing.png"

export const Banner = () => {
    return (
        <div className={style.wrapper}>
            <h2 className={style.title}>Скидки до 30% на сигвеи</h2>
            <img src={imag} alt="imag" />
        </div>
    )
}