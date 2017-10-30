console.log('app.js is running!');




const app = {
    title: 'Indecision app',
    subtitle: 'Put your life in the hands of a computer',
    options: [],
}

const onFormSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value;

    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        renderTemplate();
    }
};

const removeAll = () => {
    app.options = [];
    renderTemplate();
}

const appRoot = document.getElementById('app');

const numbers = [23, 62, 1000];

const renderTemplate = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options && app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
            <p>{app.options.length}</p>
            <button onClick={removeAll}>Remove All</button>
            {
                numbers.map((number) => {
                    return <p key={number}>Number: {number}</p>;
                })
            }
            <ol>
                {
                    app.options.map((text) => {
                        return <li key={text}>{text}</li>
                    })
                }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"></input>
                <button>Add Option</button>
            </form>
        </div>
    );
    ReactDOM.render(template, appRoot);
};

renderTemplate();
