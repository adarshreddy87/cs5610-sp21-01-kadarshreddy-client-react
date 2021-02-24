import React, {useState} from "react";
import {Link} from "react-router-dom";
import courseService,{deleteCourse, updateCourse} from "../../services/course-service";

const CourseRow = ({deleteCourse,
                       updateCourse,
                       course,
                       // updateRowCourse,
                        // saveCourse,
                       lastModified,
                       ownedBy}) => {
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
    return (
        <tr>
            <td>
                {   !editing &&
                    <Link to="/editor">
                    {course.title}
                </Link>
                }
                {
                    editing &&
                    <input className="form-control"
                        onChange={(event) =>
                        setNewTitle(event.target.value)}
                        value={newTitle}/>
                }
            </td>
            <td className="d-none d-md-table-cell">{course.ownedBy}</td>
            <td className="d-none d-lg-table-cell">{course.lastModified}</td>
            <td></td>
            <td></td>
            <td>
                {/*<i className="fa fa-trash"></i>*/}
                {
                    !editing &&
                    <i onClick={() => setEditing(true)}
                       className="btn fa fa-edit"></i>
                }
                {
                    editing &&
                    <i onClick={() => saveTitle()
                        }
                       className="btn fas fa-check"></i>
                }
                {
                    editing &&
                    <i onClick={() => deleteCourse(course)}
                       className="btn fas fa-trash"></i>
                }
            </td>
        </tr>
    )
}

export default CourseRow