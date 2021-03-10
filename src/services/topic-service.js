const TOPICS_URL = "https://wbdv-generic-server.herokuapp.com/api/00109552/topics";
const LESSONS_URL = "https://wbdv-generic-server.herokuapp.com/api/00109552/lessons";

export const createTopicForLesson = (lessonId, topic) =>
    fetch(`${LESSONS_URL}/${lessonId}/topics`,
        {
        method: "POST",
        body: JSON.stringify(topic),
        headers: {
            'content-type': 'application/json'
        }
        }
    ).then(response => response.json())

export const findTopicsByLesson = (lessonId) =>
    fetch(`${LESSONS_URL}/${lessonId}/topics`)
        .then(response => response.json())

export const findTopicById = (topicId) =>
    fetch(`${TOPICS_URL}/${topicId}`)
        .then(response => response.json())

export const updateTopic = (topicId,topic) =>
    fetch(`${TOPICS_URL}/${topicId}`,
        {
        method: "PUT",
        body: JSON.stringify(topic),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json())

export const deleteTopic = (topicId) =>
    fetch(`${TOPICS_URL}/${topicId}`,
        {
        method: "DELETE"
            }).then(response => response.json())

const api = {
    createTopicForLesson,
    findTopicsByLesson,
    updateTopic,
    deleteTopic,
    findTopicById
}

export default api