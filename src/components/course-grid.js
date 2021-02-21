import React from "react";
import {BrowserRouter,Route,Link} from "react-router-dom";
import CourseTable from "./course-table";
import CourseRow from "./course-row";
import CourseCard from "./course-card";

const CourseGrid = ({courses}) => {
    return(
                <div>
                    <div className="row">
                        <div className="col-md-10"></div>
                        <div className="col-md-1">
                            <i className="fa fa-sort"></i>
                            <Link to="/courses/table">
                                <i className="fa fa-list float-right"></i>
                            </Link>
                        </div>
                        <div className="col-md-1"></div>
                        <Link to="/editor">
                            cs5610
                        </Link>
                    </div>
                    {
                        courses.map(course => <CourseCard cardCourse={course}/>
                        )
                    }
                    {/*{*/}
                    {/*    this.courses.map(course =>*/}
                    {/*        <CourseCard*/}
                    {/*            title={course.title}/>*/}
                    {/*    )*/}
                    {/*}*/}
                </div>
    )
}

export default CourseGrid