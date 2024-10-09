import React from "react";
import style from "./main-layout.module.scss";
import { Header } from "./header";
import { Outlet } from "react-router-dom";
import { Footer } from "./footer";

export const MainLayout = () => {
    return (
        <div>
            <div>
                <Header />
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}