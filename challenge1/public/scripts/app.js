'use strict';

console.log('App here');

var template = React.createElement(
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
ReactDOM.render(template, appRoot);
