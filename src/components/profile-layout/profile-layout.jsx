import React from "react";
import { Link, Outlet } from "react-router-dom";

export const ProfileLayout = () => {
    return (
        <div className="container">
            <div>
                <Link to={'/'}>Profile</Link>
            </div>
            <div><Outlet /></div>
        </div>
    )
}