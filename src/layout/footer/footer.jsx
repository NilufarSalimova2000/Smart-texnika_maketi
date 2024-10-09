import React from "react";
import style from "./footer.module.scss";
import { Link } from "react-router-dom";
import Logo from "../../assets/header_logo.svg";
import social from "../../assets/social.svg";

export const Footer = () => {
    return (
        <footer className={style.footer}>
            <div className="container">
                <div className={style.footer_top}>
                    <div>
                        <Link className={style.logo} to={"/"}>
                        <img src={Logo} alt="logo" /></Link>
                        <a className={style.num} href="#">+7 (958) 111-95-03</a>
                        <a className={style.num} href="#">+7 (812) 660-50-54</a>
                        <p className={style.time}>Пн-вс: с 10:00 до 21:00</p>
                        <a className={style.link} href="#">Проспект Стачек 67 к.5 Лиговский проспект 205
                        Гражданский проспект, 116 к.5</a>
                    </div>
                    <div>
                        <a className={style.avtive} href="#">Для клиента</a>
                        <a className={style.link} href="#">Как купить</a>
                        <a className={style.link} href="#">Доставка и оплата</a>
                        <a className={style.link} href="#">Кредит</a>
                        <a className={style.link} href="#">Политика конфиденциальности</a>
                        <a className={style.link} href="#">Вопросы и ответы (F.A.Q.)</a>
                        <a className={style.link} href="#">Сервис и гарантия</a>
                    </div>
                    <div>
                        <a className={style.avtive} href="#">О магазине</a>
                        <a className={style.link} href="#">Отзывы</a>
                        <a className={style.link} href="#">Наши преимущества</a>
                        <a className={style.link} href="#">История компании</a>
                        <a className={style.link} href="#">Сотрудничество</a>
                        <a className={style.link} href="#">Партнёрская программа</a>
                        <a className={style.link} href="#">Вакансии</a>
                    </div>
                    <div>
                        <a className={style.avtive} href="#">Сотрудничество</a>
                        <a className={style.link} href="#">Оптом</a>
                        <a className={style.link} href="#">Дропшиппинг</a>
                    </div>
                </div>
                <div className={style.footer_bootom}>
                    <p className={style.info}>SmartТехника © 2021 Все права защищены</p>
                    <a href="#">
                        <img src={social} alt="icon" />
                    </a>
                    <a className={style.des} href="#">Разработка: websl.ru</a>
                </div>
            </div>
        </footer>
    )
}