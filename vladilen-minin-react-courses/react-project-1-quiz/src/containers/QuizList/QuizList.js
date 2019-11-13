import React, {Component} from 'react'
import classes from './QuizList.css'
import {NavLink} from "react-router-dom";
import axios from "axios";
import Loader from "../../components/UI/Loader/Loader";

export default class QuizList extends Component {

    state = {
        quizes: [],
        loading: true
    };

    _renderQuizes() {
        return this.state.quizes.map((quiz) => {
            return (
                <li
                    key={quiz.id}
                >
                    <NavLink to={'/quiz/' + quiz.id}>
                        {quiz.name}
                    </NavLink>
                </li>
            )
        })
    };

    async componentDidMount() {

        try {
            const response = await axios.get('https://react-quiz-c48c5.firebaseio.com/quizes.json');
            console.log(response.data);

            const quizes = [];

            Object.keys(response.data).forEach((key, index) => [
                quizes.push({
                    id: key,
                    name: `Тест №${index + 1}`
                })
            ]);

            this.setState({
                quizes,
                loading: false
            })
        } catch (error) {
            console.log(error);
        }
    }


    render() {
        return (
            <div className={classes.QuizList}>
                <div>

                    <h1>Список тестов</h1>

                    {
                        this.state.loading
                            ? <Loader/>
                            : <ul>
                                {this._renderQuizes()}
                            </ul>
                    }
                </div>
            </div>
        )
    }
}