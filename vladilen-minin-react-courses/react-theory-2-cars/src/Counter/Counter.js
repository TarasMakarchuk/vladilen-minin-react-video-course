import React, {Component} from 'react';
import Auxiliary from "../hoc/Auxiliary";
import Counter2 from "./Counter2";

export default class Counter extends Component {

    state = {
        counter: 0
    };

    addCounter = () => {
        // this.setState({
        //     counter: this.state.counter + 1
        // })

        this.setState((prevState) => {
            return {
                counter: prevState.counter + 1
            }
        })
    };


    render() {
        const style = {
            border: '1px solid black',
            backgroundColor: 'lightGreen',
            padding: '10px',
            marginBottom: '10px'
        };

        return (
            <Auxiliary>
                <h2>Counter {this.state.counter}</h2>

                <Counter2 />

                <button style={style} onClick={this.addCounter}>+</button>
                <button style={style} onClick={() => this.setState({counter: this.state.counter - 1})}>-</button>
            </Auxiliary>
        )


        // return [
        //         <h2 key={'1'}>Counter {this.state.counter}</h2>,
        //         <botton key={'2'} style={style} onClick={this.addCounter}>+</botton>,
        //         <botton key={'3'} style={style} onClick={() => this.setState({counter: this.state.counter - 1})}>-</botton>
        // ]
    }
}