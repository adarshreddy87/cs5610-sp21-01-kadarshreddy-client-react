import React from "react";
import {BrowserRouter,Route,Link} from "react-router-dom";
import CourseTable from "./course-table";

const CourseGrid = () => {
    return(

                    <div>
                        <i className="fa fa-sort-down float-right"></i>
                        <Link to="/courses/table">
                            <i className="fa fa-list float-right"></i>
                        </Link>
                    </div>

    )
}

export default CourseGrid