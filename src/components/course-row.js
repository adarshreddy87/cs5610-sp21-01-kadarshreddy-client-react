import React from "react";
import {Link} from "react-router-dom";

const CourseRow = ({title,lastModified}) =>

            <tr>
                <td>
                    <Link to="/editor">
                    {title}
                    </Link>
                </td>
                <td>{lastModified}</td>
                <td>1/1/2021</td>
                <td>
                    {/*<i className="fa fa-trash"></i>*/}
                    <i className="fa fa-edit"></i>
                    {/*<i className="fa fa-check"></i>*/}
                </td>
            </tr>

export default CourseRow