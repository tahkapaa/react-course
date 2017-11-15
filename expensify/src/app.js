import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const ExpenseDasboardPage = () => (
    <div>
        This is from my dashboard component
    </div>
);

const AddExpensePage = () => (
    <div>
        This is from add expense component
    </div>
);

const EditExpensePage = () => (
    <div>
        This is from edit expense component
    </div>
);

const HelpPage = () => (
    <div>
        This is help page
    </div>
);

const NotFoundPage = () => (
    <div>
        404 -
        <Link to="/">Go home</Link>
    </div>
);

const Header = () => (
    <header>
        <h1>Expensify</h1>
        <nav>
            <Link to="/">Home</Link>
            <Link to="/create">Create</Link>
            <Link to="/edit">Edit</Link>
            <Link to="/help">Help</Link>
        </nav>
    </header>
);

const routes = (
    <BrowserRouter>
        <div>
            <Header/>
            <Switch>
                <Route path="/" component={ExpenseDasboardPage} exact={true}/>
                <Route path="/create" component={AddExpensePage}/>
                <Route path="/edit" component={EditExpensePage}/>
                <Route path="/help" component={HelpPage}/>
                <Route component={NotFoundPage}/>
            </Switch>
        </div>
    </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('app'));