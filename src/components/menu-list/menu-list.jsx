import React from "react";
import style from "./menu-list.module.scss";

export const MenuList = ({id, img, title}) => {
    return (
        <div className={style.item}>
            <img src={img} alt="imag" />
            <a className={style.title} href="#">{title}</a>
        </div>
    )
}