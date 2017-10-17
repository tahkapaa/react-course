console.log('app.js is running!')

// JSX - Javascript XML
var template = (
    <div>
        <h1>Indecision app!</h1>
        <p>This is some info!</p>
        <ol>
            <li>Item one</li>
            <li>Item two</li>
        </ol>
    </div>
);

var templateTwo = (
    <div>
        <h1>Pasi</h1>
        <p>Age: 42</p>
        <p>Location: Lempäälä</p>
    </div>
);

var appRoot = document.getElementById('app')
ReactDOM.render(templateTwo, appRoot);