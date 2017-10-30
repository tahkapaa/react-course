'use strict';

var appRoot = document.getElementById('app');

var show = false;

var onToggle = function onToggle() {
    show = !show;
    render();
};

var render = function render() {
    var template = React.createElement(
        'main',
        null,
        React.createElement(
            'h1',
            null,
            'Visibility Toggle'
        ),
        React.createElement(
            'button',
            { onClick: onToggle },
            show ? 'Hide details' : 'Show details'
        ),
        React.createElement(
            'p',
            { hidden: !show },
            'Here are your details'
        ),
        show && React.createElement(
            'div',
            null,
            React.createElement(
                'p',
                null,
                'Hey. Some more details.'
            )
        )
    );
    ReactDOM.render(template, appRoot);
};

render();
