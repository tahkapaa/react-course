'use strict';

console.log('app.js is running!');

// JSX - Javascript XML
var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Indecision app!'
    ),
    React.createElement(
        'p',
        null,
        'This is some info!'
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

var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Pasi'
    ),
    React.createElement(
        'p',
        null,
        'Age: 42'
    ),
    React.createElement(
        'p',
        null,
        'Location: Lemp\xE4\xE4l\xE4'
    )
);

var appRoot = document.getElementById('app');
ReactDOM.render(templateTwo, appRoot);
