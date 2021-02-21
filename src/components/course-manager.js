import React from "react";
import './course-manager.css'
import CourseTable from "./course-table";
import CourseGrid from "./course-grid";
import {BrowserRouter, Route} from "react-router-dom";
import courseService, {findAllCourses,deleteCourse,createCourse,updateCourse} from "../services/course-service";

class CourseManager extends React.Component{
    state = {
        courses:[
            {title : "CS5610",ownedBy:"me"},
            {title: "CS5010",ownedBy:"you"}
        ]
    }

// componentDidMount() {
//         findAllCourses()
//             .then(courses => this.setState({courses:courses}))
// }

    addCourse = () => {
        const newCourse =
            {   title: "New" ,
                lastModified:'1/1/2021' ,
                ownedBy: "me"}
        courseService.createCourse(newCourse)
            .then(course => this.setState(
                (prevState) => ({
                    ...prevState,
                    courses: [
                        ...prevState.courses,
                        course
                    ]
                })))
    //         // .then(actualCourse => {
            //     this.state.courses.push(actualCourse)
            //     this.setState(this.state)
            // })
    }

    deleteCourse = (courseToDelete) => {
        courseService.deleteCourse(courseToDelete._id)
            .then(status=>{
                this.setState((prevState)=>({...prevState,
                courses:prevState.courses.filter(
                    course => course !== courseToDelete
                )}))
            })
    }

     render(){
        return(
            <div>
                <div className="row wbdv-padding">
                    <div className="col-2 col-sm-3 col-md-1">
                        <i className="fa fa-bars fa-2x"></i>
                    </div>
                    <div className="d-none d-md-block col-md-2">
                        <h5>Course Manager</h5>
                    </div>
                    <div className="col-8 col-sm-6 col-md-7">
                        <input type="text" className="form-control search-color" placeholder="New Course Title"/>
                    </div>
                    <div className="col-2 col-sm-3 col-md-1">
                        <i className="fa fa-plus-circle fa-2x float-right"></i>
                    </div>
                    <div className="col-md-1"></div>
                </div>
                <button onClick={this.addCourse}>Add Course</button>
                {/*<CourseTable courses = {this.state.courses}> </CourseTable>*/}
                {/*<CourseGrid/>*/}
                {/*<Route path="/courses/grid" component={CourseGrid}/>*/}
                <Route path="/courses/grid">
                    <CourseGrid courses={this.state.courses}
                                deleteCourse={this.deleteCourse}/>
                </Route>
                {/*<Route path="/courses/table" component={CourseTable}/>*/}
                <Route path="/courses/table">
                    <CourseTable courses={this.state.courses}
                                 deleteCourse={this.deleteCourse}/>
                </Route>
            </div>
        )
    }
}

export default CourseManager