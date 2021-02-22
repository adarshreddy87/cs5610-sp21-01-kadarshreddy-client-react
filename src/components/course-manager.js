import React from "react";
import './course-manager.css'
import CourseTable from "./course-table";
import CourseGrid from "./course-grid";
import {BrowserRouter, Route} from "react-router-dom";
import courseService, {createCourse, findAllCourses} from "../services/course-service";

export default class CourseManager extends React.Component{
    state = {
        courses:[]
    }

componentDidMount() {
        findAllCourses()
            .then(courses => this.setState({courses:courses}))
}
//
    addCourse = () => {
        const newCourse = {
            title: "Old",
            ownedBy: "me",
            lastModified: "2/10/2021"
        }
//         // alert('add course')
//
        courseService.createCourse(newCourse)
            .then(actualCourse => this.setState(prevState => ({
                    courses: [
                        ...prevState.courses, actualCourse
                    ]
                })
            ))
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
                    <div onClick={this.addCourse} className="btn col-2 col-sm-3 col-md-1">
                        <i className="fa fa-plus-circle fa-2x float-right"></i>
                    </div>
                    <div className="col-md-1"></div>
                </div>
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
