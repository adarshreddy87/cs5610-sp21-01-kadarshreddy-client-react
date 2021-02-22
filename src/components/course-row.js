import React, {useState} from "react";
import {Link} from "react-router-dom";
import {deleteCourse} from "../services/course-service";

const CourseRow = ({deleteCourse,course,
                        // saveCourse,
                       lastModified,
                       ownedBy}) => {
    const [editing, setEditing] = useState(false)
    const [title, setTitle] = useState(course.title)
    // const saveCourse = () => {
    //     setEditing(false)
    //
    // }
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
                    <input
                        onChange={(e) =>
                        setTitle(e.target.event)
                        }
                        value={title}/>
                }
            </td>
            <td className="d-none d-sm-table-cell">{course.ownedBy}</td>
            <td className="d-none d-sm-table-cell">{course.lastModified}</td>
            <td>
                {/*<i className="fa fa-trash"></i>*/}
                {
                    !editing &&
                    <i onClick={() => setEditing(true)}
                       className="btn fa fa-edit"></i>
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
            </td>
        </tr>
    )
}

export default CourseRow