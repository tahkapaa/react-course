import React from 'react';

const PortfolioItem = (props) => (
    <div>
        I do know a bit about {props.match.params.id}
    </div>
);

export default PortfolioItem;