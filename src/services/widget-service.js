const WIDGETS_URL="http://localhost:8080";

export const findWidgetsForTopic = (tid) => {
    return fetch(`${WIDGETS_URL}/api/topics/${tid}/widgets`,{
        method: 'GET'
    })
        .then(response => response.json())
}

export const findAllWidgets = () => {
    return fetch(`${WIDGETS_URL}/api/widgets`)
        .then(response => response.json())
}

export const deleteWidget = (wid) => {
    return fetch(`${WIDGETS_URL}/api/widgets/${wid}`,{
        method: 'DELETE'
    })
        .then(response => response.json())
}

export const updateWidget = (wid,widget) => {
    return fetch(`${WIDGETS_URL}/api/widgets/${wid}`, {
        method: 'PUT',
        body: JSON.stringify(widget),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())
}

export const createWidgetForTopic = (tid,widget) => {
    return fetch(`${WIDGETS_URL}/api/topics/${tid}/widgets`, {
        method:'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(widget)
    }).then(response => response.json())
}

const widgetService = {
    findAllWidgets,
    findWidgetsForTopic,
    createWidgetForTopic,
    updateWidget,
    deleteWidget
}

export default widgetService;