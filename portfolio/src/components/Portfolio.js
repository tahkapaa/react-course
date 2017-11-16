import React from 'react';
import {NavLink} from 'react-router-dom';

const Portfolio = () => (
    <div>
        <h3>Items</h3>
        <NavLink to="/portfolio/golang">Golang</NavLink>
        <NavLink to="/portfolio/css">CSS</NavLink>
        <NavLink to="/portfolio/react">React</NavLink>
    </div>
);

export default Portfolio;