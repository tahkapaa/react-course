import React from 'react';
import {Link} from 'react-router-dom';

const Portfolio = () => (
    <div>
        <h3>Items</h3>
        <Link to="/portfolio/golang">Golang</Link>
        <Link to="/portfolio/css">CSS</Link>
        <Link to="/portfolio/react">React</Link>
    </div>
);

export default Portfolio;