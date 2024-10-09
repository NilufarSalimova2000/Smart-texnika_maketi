import React from "react";
import style from "./home.module.scss";
import imag from "../../assets/img/slider.png"
import { ProductCard } from "../../components/product-card";
import { data, menu } from "../../data/data";
import { Link } from "react-router-dom";
import { MenuList } from "../../components/menu-list";

export const Home = () => {
    return (
        <>
            <section className={style.hero}>
                <div className="container">
                    <div className={style.wrapper}>
                        <div className={style.menu_block}>
                            {menu?.map((item) => {
                                return <MenuList key={item.id} img={item.img} title={item.title} />
                            })}
                        </div>
                        <div className={style.slider}>
                            <img src={imag} alt="img" />
                        </div>
                    </div>
                </div>
            </section>
            <section className={style.products}>
                <div className="container">
                    <h2 className={style.title}>Хиты продаж</h2>
                    <div className={style.list}>
                        {data?.map((item) => {
                            return  <Link to={`/product/${item.id}`}>
                            <ProductCard key={item.id} img={item.img} title={item.title} info={item.info} prise={item.prise} /></Link>
                        })}
                    </div>
                </div>
            </section>
            <section className={style.products}>
                <div className="container">
                    <h2 className={style.title}>Новинки</h2>
                    <div className={style.list}>
                        {data?.map((item) => {
                            return  <Link to={`/product/${item.id}`}>
                            <ProductCard key={item.id} img={item.img} title={item.title} info={item.info} prise={item.prise} /></Link>
                        })}
                    </div>
                </div>
            </section>
        </>
    )
}