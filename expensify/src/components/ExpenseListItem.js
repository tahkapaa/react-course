import React from 'react';

const ExpenseListItem = ({description, amount, createdAt}) => (
    <div>
        <h3>Item:</h3>
        <p>{description}</p>
        <p>{amount}</p>
        <p>{createdAt}</p>
    </div>
);

export default ExpenseListItem;