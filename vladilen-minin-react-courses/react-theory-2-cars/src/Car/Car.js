import React, {Component} from 'react';
import classes from './Car.css';
import withClass from "../hoc/withClass";
import PropTypes from 'prop-types';

// import Radium from 'radium';

class Car extends Component {

    constructor(props){
        super(props);

        this.inputRef = React.createRef();
    }

    componentDidMount() {
        if (this.props.index === 0) {
            this.inputRef.current.focus();
        }
    }


    render() {

        console.log('Car render');
        const inputClasses = [classes.input];
        if (this.props.name !== '') {
            inputClasses.push(classes.green);
        } else {
            inputClasses.push(classes.red);
        }

        if (this.props.name.length > 4) {
            inputClasses.push(classes.bold);
        }

        return (
            <React.Fragment>
                <p>Car name {this.props.name}</p>
                <p>Year:<strong>{this.props.year}</strong></p>
                <input
                    ref={this.inputRef}
                    className={inputClasses.join(' ')}
                    type="text"
                    onChange={this.props.onChangeName}
                    placeholder='enter car name'
                    value={this.props.name}/>
                <button onClick={this.props.onDelete}>Delete</button>
            </React.Fragment>

        );
    };

}

Car.propTypes = {
    name: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    onChangeName: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
    index: PropTypes.number.isRequired
};


// function Car() {
//     return(
//         <div>This is car component</div>
//     )
// }

// const car = () => {
//     return(
//         <div>This is car component</div>
//     )
// };

// const car = () => (
//     <div>This is car component</div>
// );

export default withClass(Car, classes.Car);