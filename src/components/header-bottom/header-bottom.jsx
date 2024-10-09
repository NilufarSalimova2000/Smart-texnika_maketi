import React from "react";
import style from "./header-bottom.module.scss";
import { Link } from "react-router-dom";

export const HeaderBottom = () => {
    return (
        <div className={style.wrapper}>
            <Link className={style.link} to={"/"}>Home</Link>
            <Link className={style.link} to={"/about"}>О компании</Link>
            <Link className={style.link} to={"/sale"}>Акции</Link>
            <Link className={style.link} to={"/installment"}>Рассрочка 0|0|18</Link>
            <Link className={style.link} to={"/servise"}>Сервис и гарантия</Link>
            <Link className={style.link} to={"/contact"}>Контакты</Link>
        </div>
    )
}