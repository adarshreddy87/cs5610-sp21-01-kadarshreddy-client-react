import React,{useState,useEffect} from 'react'
import {Link, useParams} from "react-router-dom";
// import questionService from "../services/question-service"
import Question from "./questions/question";
import QuizService from "../services/quiz-service";
import QuestionService from "../services/question-service";
const Quiz = () => {
    const {courseId, quizId} = useParams();
    const [quiz, setQuiz] = useState({});
    const [questions, setQuestions] = useState([]);
    const [graded, setGraded] = useState(false)
    const [attempt, setAttempt] = useState([])
    useEffect(() => {
        QuizService.findQuizById(quizId)
            .then(result => setQuiz(result));
        QuestionService.findQuestionsForQuiz(quizId)
            .then(res => setQuestions(res));
        if (graded) {
            // console.log(quiz._id)
            // console.log(questions)
            QuizService.submitQuiz(quiz._id, questions)
                .then(res => setAttempt(res))

            // console.log(JSON.parse(hi)
        }
    }, [quizId,graded])
    return (
        <div>
            <div className='row'>
                <Link to={"/courses/table"} >Go back</Link>
                <h3>Quiz {quizId} ({questions.length})</h3>
            </div>
            {graded && <Link className='btn btn-secondary'
                             to={`/courses/${courseId}/quizzes/${quizId}/attempts`}>See attempts</Link>}
            {
                questions.map(question =>
                    <div key={question._id}>
                        <Question question={question} questions={questions} setQuestions={setQuestions}
                                  graded={graded}/>
                    </div>
                )
            }
            <div>
                <button onClick={() => setGraded(true)}
                        className='btn btn-success'
                        disabled={graded}>
                    Submit
                </button>
                {
                    graded &&
                    <div>

                        <h3>Total score: {attempt["score"]}</h3>

                    </div>
                }
            </div>
        </div>

    )
}

export default Quiz