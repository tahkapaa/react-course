import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Contact from '../components/Contact';
import Header from '../components/Header';
import Home from '../components/Home';
import NotFoundPage from '../components/NotFoundPage';
import Portfolio from '../components/Portfolio';
import PortfolioItem from '../components/PortfolioItem';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header/>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/contact" component={Contact}/>
                <Route path="/portfolio" exact component={Portfolio}/>
                <Route path="/portfolio/:id" component={PortfolioItem}/>
                <Route component={NotFoundPage}/>
            </Switch>
        </div>
    </BrowserRouter>
)

export default AppRouter;