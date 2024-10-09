import React from "react";
import style from "./news-card.module.scss";

export const NewsCard = () => {
    return (
        <div className={style.item}>
            <h3 className={style.title}>Открытие нового магазина</h3>
            <p className={style.text}>Разнообразный и богатый опыт говорит нам, что консультация с широким активом требует от нас анализа анализа существующих паттернов поведения</p>
            <div className={style.block}>
                <a className={style.link} href="#">Подробнее</a>
                <p className={style.date}>05 июня 2021</p>
            </div>
        </div>
    )
}