import React, {Component} from "react";

class Counter2 extends Component {
    state = {
        number: 0
    }

    constructor(props) {
        super(props);
        console.log('constructor');
    }

    componentWillUnmount() {
        console.log('componentWillMount (deprecated)');
    }

    componentDidMount() {
        console.log('componentDidMount');
    }

    shouldComponentUpdate(nextProps, nextState) {

        console.log('shouldComponentUpdate');
        if (nextState.number % 5 === 0) return false;
        return true;
    }

    componentWillUpdate(nextProps, nextState) {
        console.log('componentWillUpdate');
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate');
    }



    handleIncrease = () => {
        // this.setState({
        //     number: this.state.number + 1
        // });

        // this.setState(
        //     (state) => ({
        //         number: state.number
        //     })
        // );

        this.setState(
            ({number}) => ({
                number: number + 1
            })
        );
    }

    handleDecrease = () => {
        // this.setState({
        //     number: this.state.number - 1
        // });

        const {number} = this.state;
        this.setState({
            number: number - 1
        });
    }

    render() {
        return (
            <div>
                <h1>카운터</h1>
                <div>값: {this.state.number}</div>
                <button onClick={this.handleIncrease}>+</button>
                <button onClick={this.handleDecrease}>-</button>
            </div>
        );
    }
}

export default Counter2;