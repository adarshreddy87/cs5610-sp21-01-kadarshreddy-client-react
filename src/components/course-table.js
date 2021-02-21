import React from "react";
import CourseRow from "./course-row";
import {BrowserRouter,Route,Link} from "react-router-dom";
import CourseGrid from "./course-grid";
class CourseTable extends React.Component{
    state = {
        courses:[
            {title : "CS5610",lastModified:"me"},
            {title: "CS5010",lastModified:"you"}
        ]
    }
    addCourse = () => {
       const newCourse = {title: "New" , lastModified: "me"}
       this.state.courses.push(newCourse)
        this.setState(this.state)
    }
    render() {
        return(

            <div className="container-fluid">
                <button onClick={this.addCourse}>Add Course</button>
            <table className="table second-div-padding">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Owned by</th>
                        <th>Modified Date</th>
                        <th>
                            <i className="fa fa-sort"></i>
                            &nbsp;
                            &nbsp;
                            <Link to="/courses/grid">
                                <i className="fa fa-th float-right"></i>
                            </Link>
                        </th>
                    </tr>
                </thead>
                <tbody>
                {
                    this.state.courses.map(course =>
                        <CourseRow
                            title = {course.title}>
                            lastModified = {course.lastModified}
                        </CourseRow>
                    )
                }
                <CourseRow title="CS5610"/>
                <CourseRow title="CS5800"/>
                <CourseRow title="CS5200"/>
            </tbody>
            </table>
            </div>
        )
    }
}

export default CourseTable