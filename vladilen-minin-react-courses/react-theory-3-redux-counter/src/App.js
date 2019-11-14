import React, {Component} from 'react';
import './App.scss';
import {connect} from 'react-redux'
import Counter from "./Counter";
import {add, sub, addNumber, asyncAdd} from './redux/actions/actions';

class App extends Component {

    render() {
        console.log(this.props);
        return (
            <div className='App'>
                <h1>Counter<strong>{this.props.counter}</strong></h1>

                <hr/>
                <div className='Action'>
                    <button onClick={this.props.onAdd}>Add 1</button>
                    <button onClick={this.props.onSub}>Subtract 1</button>
                </div>

                <div className='Action'>
                    <button onClick={() => this.props.onAddNumber(15)}>Add 15</button>
                    <button onClick={() => this.props.onAddNumber(-17)}>Subtract 17</button>
                </div>

                <div className='Action'>
                    <button onClick={() => this.props.onAsyncAdd(100)}>
                        Асинхронно добавить 100
                    </button>
                </div>

                <Counter/>

            </div>
        )
    }
}

function mapStateToProps(state) {
    console.log('State', state);
    return {
        counter: state.counter1.counter
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onAdd: () => dispatch(add()),
        onSub: () => dispatch(sub()),
        onAddNumber: number => dispatch(addNumber(number)),
        onAsyncAdd: number => dispatch(asyncAdd(number))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
