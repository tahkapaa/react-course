const appRoot = document.getElementById('app');

let show = false

const onToggle = () => {
    show = !show;
    render();
};

const render = () => {
    const template = (
        <main>
            <h1>Visibility Toggle</h1>
            <button onClick={onToggle}>{show ? 'Hide details' : 'Show details'}</button>
            <p hidden={!show}>Here are your details</p>
        </main>
    );
    ReactDOM.render(template, appRoot);
};

render();