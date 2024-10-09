import React from "react";
import style from "./header.module.scss";
import logo from "../../assets/header_logo.svg"
import { Search } from "../../assets/icons/search";
import { Eye } from "../../assets/icons/eye";
import { Love } from "../../assets/icons/love";
import { Rating } from "../../assets/icons/rating";
import { Cart } from "../../assets/icons/cart";
import { Link } from "react-router-dom";
import { HeaderBottom } from "../../components/header-bottom";

export const Header = () => {
    return (
        <header>
            <div className={style.header_top}>
                <div className="container">
                    <div className={style.wrapper}>
                        <a href="#">
                            <img src={logo} alt="logo" />
                        </a>
                        <div className={style.num_block}>
                            <a className={style.tel_num} href="#">+7 (812) 660-50-54</a>
                            <a className={style.tel_num} href="#">+7 (958) 111-95-03</a>
                            <p className={style.time}>Пн-вс: с 10:00 до 21:00</p>
                        </div>
                        <div className={style.icon_block}>
                            <div className={style.input_block}>
                                <Search />
                                <input className={style.input} placeholder="Поиск" type="text" />
                            </div>
                            <div>
                                <Eye />
                                <Love />
                                <Rating />
                                <Cart />
                            </div>
                            <Link to={"/profile"} className={style.regist}>Войти</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className={style.header_bottom}>
                <div className="container">
                    <div className={style.block}>
                        <span className={style.menu}>Каталог товаров</span>
                        <HeaderBottom />
                    </div>
                </div>
            </div>
        </header>
    )
}