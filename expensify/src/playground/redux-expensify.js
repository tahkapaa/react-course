store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
});

const expenseOne = store.dispatch(addExpense({description: 'Rent', amount: 300, createdAt: -2000}));
const expenseTwo = store.dispatch(addExpense({description: 'Coffee', amount: 600, createdAt: -1000}));
// store.dispatch(removeExpense({id: expenseOne.expense.id}));
// store.dispatch(editExpense(expenseTwo.expense.id, {amount: 500}));
// store.dispatch(setTextFilter('off')); store.dispatch(sortByDate());
// store.dispatch(setStartDate(0)); store.dispatch(setEndDate(999));
store.dispatch(sortByAmount());

const demoState = {
    expenses: [
        {
            id: 'padfvbfcvb',
            description: 'January Rent',
            note: 'This was the final payment for that addres',
            amount: 54500,
            createdAt: 0
        }
    ],
    filters: {
        text: 'rent',
        sortBy: 'amount', // date or amount
        startDate: undefined,
        endDate: undefined
    }
};
