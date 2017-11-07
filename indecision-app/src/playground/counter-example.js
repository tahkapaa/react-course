class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.addOne = this.addOne.bind(this);
        this.minusOne = this.minusOne.bind(this);
        this.reset = this.reset.bind(this);

        this.state = {
            count: 0
        };
    }
    
    componentDidMount() {
        const count = localStorage.getItem('count');
        const countInt = parseInt(count, 10)
        if (!isNaN(countInt)) {
            this.setState(() => ({ count: countInt }));
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.count !== prevState.count) {
            localStorage.setItem('count', this.state.count);
        }
    }

    addOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count+1
            };
        });
    }

    minusOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count-1
            };
        });
    }

    reset() {
        this.setState(() => {
            return {
                count: 0
            };
        });
    }

    render() {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.addOne}>+1</button>
                <button onClick={this.minusOne}>-1</button>
                <button onClick={this.reset}>reset</button>
            </div>
        )
    }
}

ReactDOM.render(<Counter />, document.getElementById('app'));

// let count = 0;
// const addOne = () => {
//     console.log('addOne', count);
//     count++;
//     renderCounterApp()
// };
// const minusOne = () => {
//     console.log('minusOne');
//     count--;
//     renderCounterApp()
// };
// const reset = () => {
//     console.log('reset');
//     count = 0;
//     renderCounterApp()    
// };

// const renderCounterApp = () => {
//     const templateTwo = (
//         <div>
//             <h1>Count: {count}</h1>
//             <button onClick={addOne}>+1</button>
//             <button onClick={minusOne}>-1</button>
//             <button onClick={reset}>reset</button>
//         </div>
//     );
//     ReactDOM.render(templateTwo, appRoot);
// }


// renderCounterApp();