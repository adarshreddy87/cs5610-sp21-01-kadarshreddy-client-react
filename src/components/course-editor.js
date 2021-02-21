import React from "react";
import {Link} from "react-router-dom";

const CourseEditor = ({history}) => {
    return(
        <div>
        <h1>
            <Link to="/courses">
                <i className="fa fa-arrow-left"></i>
            </Link>
            <span onClick={() => history.goBack()}>Go Back</span>
            Course Editor</h1>
        </div>
    )
}

export default CourseEditor