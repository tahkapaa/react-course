console.log('App here')

var template = (
    <div>
        <h1>Pasi</h1>
        <p>Age: 42</p>
        <p>Location: Lempäälä</p>
    </div>
);

var appRoot = document.getElementById('app')
ReactDOM.render(template, appRoot)