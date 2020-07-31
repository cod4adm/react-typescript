import React from "react";
import {NavLink} from "react-router-dom";

export const Navbar: React.FC = () => (
    <nav>
        <div className="nav-wrapper blue darken-1 px1">
            <NavLink to="/react-ts-live/" className="brand-logo">React + Typescript</NavLink>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><NavLink to="/react-ts-live/">Список дел</NavLink></li>
                <li><NavLink to="/react-ts-live/about">Информация</NavLink></li>
            </ul>
        </div>
    </nav>
);
