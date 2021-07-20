import axios from 'axios';
import {
    QuizLoad, QuizQuestion
  } from '../constants/constants';
export const listQuestions = () => async (dispatch) => {
    dispatch({
        type: QuizLoad,
    })
    try{
        const {data} = await axios.get('/questions')
        dispatch({type: QuizQuestion ,payload: data})
    }catch(error){
        alert('Quiz data not fetched')
    }
}