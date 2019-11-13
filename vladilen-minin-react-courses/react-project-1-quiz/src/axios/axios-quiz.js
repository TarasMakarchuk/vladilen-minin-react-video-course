import axios from 'axios'

export default axios.create({
    baseURL: 'https://react-quiz-c48c5.firebaseio.com/'
})