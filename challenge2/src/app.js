console.log('app.js is running!');

// JSX - Javascript XML
var app = {
    title: 'Challenge2 App!',
    subtitle: 'Some info!',
}

var template = (
    <div>
        <h1>{app.title}</h1>
        <p>{app.subtitle}</p>
        <ol>
            <li>Item one</li>
            <li>Item two</li>
        </ol>
    </div>
);

var appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);