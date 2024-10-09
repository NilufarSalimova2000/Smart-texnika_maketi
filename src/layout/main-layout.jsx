import React from "react";
import style from "./main-layout.module.scss";
import { Header } from "./header";
import { Outlet } from "react-router-dom";
import { Footer } from "./footer";

export const MainLayout = () => {
    return (
        <div className={style.container_layout}>
            <Header />
            <div className={style.content}>
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};
