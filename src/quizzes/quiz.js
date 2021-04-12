import React,{useState,useEffect} from 'react'
import {useParams} from "react-router-dom";
import questionService from "../services/question-service"
import Question from "./question";
const Quiz= () => {
    const [questions,setQuestions] =useState([]);
    const {courseId,quizId} =useParams();

    useEffect(() =>{
        questionService.findQuestionsForQuiz(quizId).then(
            (questions) => {
                setQuestions(questions)
            },[])})

    return (
        <div>

            <h2>Quiz {quizId}</h2>
            <ul>
                {
                    questions.map(question =>
                        <li>
                            <Question question = {question}/>
                        </li>
                    )
                }
            </ul>
        </div>
    )
}
export default Quiz