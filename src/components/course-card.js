import React, {useState} from 'react'
import {Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import {deleteCourse} from "../services/course-service";

const CourseCard = ({deleteCourse,course}) => {
    const [editing, setEditing] = useState(false)
    return(
        <div className="row card-deck">
        <div className="card col-md-4">
            <img className="card-img-top" src="..." alt="..."/>
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
                {
                    editing &&
                    <i onClick={() => setEditing(false)}
                       className="btn fas fa-check"></i>
                }
                {
                    editing &&
                    <i onClick={() => deleteCourse(course)}
                       className="btn fas fa-trash"></i>
                }

            </div>
        </div>
        </div>
    )
}

export default CourseCard