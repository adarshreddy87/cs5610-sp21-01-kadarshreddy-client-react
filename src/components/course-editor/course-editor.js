import React, {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import moduleReducer from "../../reducers/module-reducer";
import lessonReducer from "../../reducers/lesson-reducer";
import topicReducer from "../../reducers/topic-reducer";
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import ModuleList from "./module-list";
import LessonTabs from "./lesson-tabs";
import TopicPills from "./topic-pills";
import './course-editor.css'
import courseService from "../../services/course-service";

const reducer = combineReducers({
    moduleReducer:moduleReducer,
    lessonReducer:lessonReducer,
    topicReducer:topicReducer
})

const store = createStore(reducer)

const CourseEditor = ({history}) => {
    console.log(history.location.pathname)
    const {layout,courseId, moduleId} = useParams();
    const [courseName, setCourseName] = useState({title: ""})
    useEffect( () => {
        courseService.findCourseById(courseId).then(course => {setCourseName({title: course.title})})
    }, [courseId]);

    return(
        <Provider store={store}>
            <div className="container-fluid">
                <div>
                    <h2>
                        <a href={`/courses/${layout}`}  className="fa fa-arrow-left"></a>
                        {courseName.title}
                    </h2>
                </div>
                <br/>
                <div className="row">
                    <div className="col-4">
                        <ModuleList/>
                    </div>
                    <div className='col-8'>
                        <LessonTabs/>
                        <TopicPills/>
                    </div>
                </div>
            </div>
        </Provider>
    )}

export default CourseEditor