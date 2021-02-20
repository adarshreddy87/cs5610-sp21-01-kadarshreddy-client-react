import React from "react";
import './course-manager.css'
import CourseTable from "./course-table";
import CourseGrid from "./course-grid";
class CourseManager extends React.Component{
     render() {
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
                    <div className="col-2 col-sm-3 col-md-2">
                        <i className="fa fa-plus-circle fa-2x"></i>
                    </div>
                </div>
                <CourseTable/>
                {/*<CourseGrid/>*/}
            </div>
        )
    }
}

export default CourseManager