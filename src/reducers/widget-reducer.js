const initialState = {
    widgets: [
    ]
}

const widgetReducer = (state=initialState,action) =>{
    switch(action.type) {
        case "CREATE_WIDGET":
            return {
                ...state,
                widgets: [...state.widgets, action.widget]
            }

        case "FIND_WIDGET_BY_TOPIC":
            return  {
                ...state,
                widgets: action.widgets
            }

        case "UPDATE_WIDGET":
            return {
                ...state,
                widgets: state.widgets.map(w => {
                    if (w.id===action.widget.id){
                        return action.widget;
                    }
                    else return w;
                })
            }
        case "DELETE_WIDGET":
            return{
                ...state,
                widgets:state.widgets.filter(w=> w.id!==action.widget.id)
            }
    }
}

export default widgetReducer