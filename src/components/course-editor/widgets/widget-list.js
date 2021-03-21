import React,{useState,useEffect} from "react";
import {useParams} from "react-router-dom";
import widgetService, {findWidgetsForTopic} from "../../../services/widget-service";
import {connect} from "react-redux";
import widgetReducer from "../../../reducers/widget-reducer";
import topicService from "../../../services/topic-service";

const WidgetList = () => {
    const{topicId} = useParams();
    // const [widgets,setWidgets] = useState([])
    useEffect(()=>{
        findWidgetsForTopic(topicId)
    },[topicId])
return(
    <div>
        <h3>Widgets
        <i
           className="fas fa-plus float-right"></i>
        </h3>

    </div>
    )
}

const stpm =(state) => ({
    widgets: state.widgetReducer.widgets
})

const dtpm=(dispatch)=> {
    return {
        deleteWidget: (wid) => widgetService.deleteWidget(wid)
            .then(status => dispatch({
                type: "DELETE_WIDGET"
            })),
        updateWidget: (wid,widget) =>
            widgetService.updateWidget(wid, widget)
                .then(status => dispatch({
                    type: "UPDATE_WIDGET",
                    widgets: widget
                })),
        createWidgetForTopic: (tid, widget) => {
            if (!(tid != "undefined" &&
                typeof tid != "undefined" && tid != "undefined" && typeof tid != "undefined")) {
                alert("Please select the Topic first")
            } else {
                widgetService.createWidgetForTopic(tid,widget)
                    .then(theActualWidget => dispatch({
                        type: "CREATE_WIDGET",
                        widget: theActualWidget
                    }))
            }
        },
        findWidgetsForTopic: (tid) => {
            widgetService.findWidgetsForTopic(tid)
                .then(widgets => dispatch({
                        type: "FIND_WIDGET_BY_TOPIC",
                        widgets: widgets
                    })
                )
        }
    }
}
export default connect(stpm,dtpm)(WidgetList)