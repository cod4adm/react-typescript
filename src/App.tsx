import React from 'react';
import {Navbar} from "./components/Navbar";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import {TodosPage} from "./pages/TodosPage";
import {AboutPage} from "./pages/AboutPage";

export const App: React.FC = () => {
    return (
        <BrowserRouter>
            <Navbar/>
            <div className="container">
                <Switch>
                    <Route component={TodosPage} path='/react-ts-live/' exact />
                    <Route component={AboutPage} path='/react-ts-live/about' />
                </Switch>
            </div>
        </BrowserRouter>
    );
};
