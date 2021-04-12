import React, {useState,useEffect} from "react"
import quizService from "../services/quiz-service"
import {Link, useParams} from "react-router-dom";

const QuizzesList =() =>{
    const {courseId} = useParams();
    const [quizzes,setQuizzes] =useState([])
    useEffect(() =>{
// fetch("http://localhost:3000/api/quizzes")
//     .then(response => response.json())
//     .then((quizzes)=>{setQuizzes(quizzes)

        quizService.findAllQuizzes().then((quizzes) => {setQuizzes(quizzes)})
    }, [])
    return(
        <div>
            <h1>Quizzes list</h1>
            <div className="list-group"> {quizzes.map((quiz) => {
                return(
                    <a href = {`/courses/${courseId}/quizzes/${quiz._id}`} className="list-group-item">{quiz.title}</a>
                )
            })}</div>
        </div>
    )
}
export default QuizzesList