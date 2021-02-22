import React, {useState} from 'react'
import {Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import {deleteCourse} from "../services/course-service";

const CourseCard = ({deleteCourse,updateCourse,course}) => {
    const [editing, setEditing] = useState(false)
    const [newTitle, setNewTitle] = useState(course.title)
    const saveTitle = () => {
        setEditing(false)
        const newCourse = {
            ...course,
            title: newTitle
        }
        updateCourse(newCourse)
    }
    return(
        <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
        {/*<div className="card col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">*/}
        <div className="container">
            <img className="card-img-top"
                 src="https://www.valuecoders.com/blog/wp-content/uploads/2016/08/react.png"
                 alt="..."/>
            {
                editing &&
                <i onClick={() => saveTitle()}
                   className="mt-2 fas fa-check"></i>
            }
            {
                editing &&
                <i onClick={() => deleteCourse(course)}
                   className="mt-2 fas fa-trash"></i>
            }
        </div>
            <div className="card-body">
                <h5 className="card-title">{course.title}</h5>
                <p className="card-text">Some quick example text to build on the card title and make
                    up the bulk of the card's content.</p>
                <Link to="/editor" className="btn btn-primary">
                    {course.title}
                </Link>
                {
                    !editing &&
                    <i onClick={() => setEditing(true)}
                       className="btn fa fa-edit float-right"></i>
                }


            </div>
        {/*</div>*/}
        </div>
    )
}

export default CourseCard