'use strict';

console.log('app.js is running!');

// JSX - Javascript XML
var app = {
    title: 'Challenge2 App!',
    subtitle: 'Some info!'
};

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        app.title
    ),
    React.createElement(
        'p',
        null,
        app.subtitle
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            'Item one'
        ),
        React.createElement(
            'li',
            null,
            'Item two'
        )
    )
);

var appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);
