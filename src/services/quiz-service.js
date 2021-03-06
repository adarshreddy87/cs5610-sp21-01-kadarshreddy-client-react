const QUIZZES_URL = "https://cs5610-kadarshreddy-node.herokuapp.com/api/quizzes"
const findAllQuizzes = () => {
    return fetch(QUIZZES_URL)
        .then(response => response.json())
}
const findQuizById = (qid) => {
    return fetch(`${QUIZZES_URL}/${qid}`)
        .then(response => response.json())
}
const submitQuiz = (quizId, questions) => {
    return fetch(`${QUIZZES_URL}/${quizId}/attempts`, {
        method: 'POST',
        body: JSON.stringify(questions),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => {
        return response.json()})
        // .then(result => console.log(result))
}

const getQuizAttempts = (qid) =>
    fetch(`${QUIZZES_URL}/${qid}/attempts`)
        .then(response => response.json());

const api = {
    findAllQuizzes, findQuizById,submitQuiz,getQuizAttempts
}
export default api