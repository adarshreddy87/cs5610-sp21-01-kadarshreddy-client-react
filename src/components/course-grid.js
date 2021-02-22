import React from "react";
import {BrowserRouter,Route,Link} from "react-router-dom";
import CourseTable from "./course-table";
import CourseRow from "./course-row";
import CourseCard from "./course-card";
import CourseManager from "./course-manager";
import {deleteCourse} from "../services/course-service";

const CourseGrid = ({courses,deleteCourse,updateCourse}) => {
    return(
                <div>
                    <div className="row container">
                        <div className="col-md-10"></div>
                        <div className="col-md-1">
                            <i className="fa fa-sort"></i>
                            <Link to="/courses/table">
                                <i className="fa fa-list float-right"></i>
                            </Link>
                        </div>
                        <div className="col-md-1"></div>
                    </div>
                    <div className="row">
                        {
                            courses.map(course =>
                                <CourseCard course={course}
                                deleteCourse={deleteCourse}
                                updateCourse={updateCourse}/>
                            )
                        }
                    </div>


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