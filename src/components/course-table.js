import React from "react";
import CourseRow from "./course-row";
import {BrowserRouter,Route,Link} from "react-router-dom";
import CourseGrid from "./course-grid";
class CourseTable extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="container">
                {/*<button onClick={this.addCourse}>Add Course</button>*/}
            <table className="table second-div-padding">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th className="d-none d-sm-table-cell">Owned by</th>
                        <th className="d-none d-md-table-cell">Modified Date</th>
                        <th>
                            <a className="ml-2" href="#">
                                <i className="fa fa-folder"/>
                            </a>
                            <a className="ml-2" href="#">
                                <i className="fa fa-sort"/>
                            </a>
                            <Link to="/courses/grid">
                                <i className="ml-2 fa fa-th"></i>
                            </Link>
                        </th>
                    </tr>
                </thead>
                <tbody>
                {
                    this.props.courses.map(course =>
                        <CourseRow
                            key={course._id}
                            deleteCourse={this.props.deleteCourse}
                            updateCourse={this.props.updateCourse}
                            // updateRowCourse={this.props.updateRowCourse}
                            course={course}
                            title={course.title}
                            lastModified={course.lastModified}
                            ownedBy={course.ownedBy}/>
                    )
                }
                {/*<CourseRow title="CS5610"/>*/}
                {/*<CourseRow title="CS5800"/>*/}
                {/*<CourseRow title="CS5200"/>*/}
            </tbody>
            </table>
            </div>
        )
    }
}

export default CourseTable