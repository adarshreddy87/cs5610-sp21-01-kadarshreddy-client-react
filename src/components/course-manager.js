import React from "react";
import './course-manager.css'
import CourseTable from "./course-table";
import CourseGrid from "./course-grid";
import {BrowserRouter, Route} from "react-router-dom";
import courseService, {createCourse, findAllCourses,deleteCourse} from "../services/course-service";

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
            .then(actualCourse => {
                    this.state.courses.push(actualCourse)
                    this.setState(this.state)
                }
            )
    }

    deleteCourse = (courseToDelete) => {
        courseService.deleteCourse(courseToDelete._id)
            .then(status=>{
                this.setState((prevState)=>({...prevState,
                courses:prevState.courses.filter(
                    course => course._id !== courseToDelete._id
                )}))
            })
    }

    updateCourse = (course) => {
        courseService.updateCourse(course._id, course)
            .then(status => {
                this.setState((prevState) => {
                    let nextState = {...prevState}
                    nextState.courses = prevState.courses.map(c => {
                        if(c._id === course._id) {
                            return course
                        } else {
                            return c
                        }
                    })
                    return nextState
                })
            })
    }
    // updateRowCourses = () => {
    //     findAllCourses()
    //         .then(courses => {
    //             this.setState({
    //                 courses: courses
    //             })
    //         })
    // }

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
                        <input id="title-fld"
                                type="text"
                               className="form-control
                               search-color"
                               placeholder="New Course Title"
                        // onChange={(e) => {
                        //     const newTitle = e.target.value
                        //     this.setState({title:newTitle})
                        // }}
                               placeholder="New Course Title"/>
                    </div>
                    <div onClick={this.addCourse} className="btn col-2 col-sm-3 col-md-1">
                        <i className="fa fa-plus-circle fa-2x float-right"></i>
                    </div>
                    <div className="col-md-1"></div>
                </div>
                {/*<CourseTable courses = {this.state.courses}> </CourseTable>*/}
                {/*<CourseGrid/>*/}
                {/*<Route path="/courses/grid" component={CourseGrid}/>*/}
                <Route path="/courses/grid" exact={true}>
                    <CourseGrid courses={this.state.courses}
                                createCourse={this.addCourse}
                                deleteCourse={this.deleteCourse}
                                // updateRowCourses={this.updateRowCourses}
                                updateCourse={this.updateCourse}/>
                </Route>
                {/*<Route path="/courses/table" component={CourseTable}/>*/}
                <Route path="/courses/table" exact={true}>
                    <CourseTable courses={this.state.courses}
                                 createCourse={this.addCourse}
                                 deleteCourse={this.deleteCourse}
                                 updateCourse={this.updateCourse}/>
                </Route>
                <footer id ="footer">
                    <em onClick={this.addCourse} id="footerIcon" className="fa fa-plus-circle fa-3x color-red"></em>
                </footer>
            </div>
        )
    }
}
