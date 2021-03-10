const initialState={
    modules:[
        {title:"cs1200"},
        {title:"cs2200"}
    ]
}

const reducer = (state= initialState,action) => {
    switch (action.type){
        case "CREATE_MODULE":
        case "DELETE_MODULE":
        case "UPDATE_MODULE":
        default:
            return state
    }
}
