class Visibility extends React.Component {
    constructor(props) {
        super(props);
        this.onToggle = this.onToggle.bind(this);

        this.state = {
            show: false
        };
    }

    onToggle() {
        this.setState((prevState) => {
            return {
                show: !prevState.show
            };
        });
    }

    render() {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.onToggle}>
                    {this.state.show ? 'Hide details' : 'Show details'}
                </button>
                {
                    this.state.show && (
                        <div>
                            <p>Some more details here!</p>
                        </div>
                    )
                }
            </div>
        )
    }
}

ReactDOM.render(<Visibility />, document.getElementById('app'));

// const appRoot = document.getElementById('app');

// let show = false

// const onToggle = () => {
//     show = !show;
//     render();
// };

// const render = () => {
//     const template = (
//         <main>
//             <h1>Visibility Toggle</h1>
//             <button onClick={onToggle}>{show ? 'Hide details' : 'Show details'}</button>
//             <p hidden={!show}>Here are your details</p>
//             {show && (
//                 <div>
//                     <p>Hey. Some more details.</p>
//                 </div>
//             )}
//         </main>
//     );
//     ReactDOM.render(template, appRoot);
// };

// render();