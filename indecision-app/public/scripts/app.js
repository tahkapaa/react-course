console.log('app.js is running!')

// JSX - Javascript XML
//var template = <h1 id="someid">This is JSX from app.js!</h1>;

var template = React.createElement(
    'h1',
    { id: "someid" },
    'This is JSX from app.js'
)
var appRoot = document.getElementById('app')

ReactDOM.render(template, appRoot);