console.log('app.js is running!');

// JSX - Javascript XML
var app = {
    title: 'Indecision app!',
    subtitle: 'This is the subtitle',
    options: ['One', 'Two'],
}
var template = (
    <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{app.options && app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
        <ol>
            <li>Item one</li>
            <li>Item two</li>
        </ol>
    </div>
);

var user = {
    age: 17,
    location: 'Lempäälä',
};

function getLocation(location) {
    if (location) {
        return <p>Location: {location}</p>;
    }
    // return undefined;
}

var templateTwo = (
    <div>
        <h1>{user.name ? user.name : 'Anonymous'}</h1>
        {(user.age && user.age>=18) && <p>Age: {user.age}</p>}
        {getLocation(user.location)}
    </div>
);

var appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);