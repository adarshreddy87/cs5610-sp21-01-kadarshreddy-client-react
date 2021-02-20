import React from "react";

const CourseGrid = () => {
    return(
        <div>
            <div className="second-div-padding">
                <div className="row">
                    <div className="col-2 col-md-1"></div>
                    <div className="col-10 col-md-4">
                        <b>Title</b>
                    </div>
                    <div className="d-none d-sm-block col-md-2">
                        <b>Owned by</b>
                        &nbsp;
                        <i className="fa fa-sort-down"></i>
                    </div>
                    <div className="d-none d-sm-block col-md-2">
                        <b>Last modified by me</b>
                    </div>
                    <div className="d-none d-sm-block col-md-3">
                        <i className="fa fa-th"></i>
                        <i className="fa fa-sort"></i>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row every-row">
                    <div className="col-11 col-md-5">
                        <a href="/course-editor/course-editor.template.client.html">
                            <i className="fa fa-file"></i>
                            CS4550 - UG Web Dev
                        </a>
                    </div>
                    <div className="d-none d-sm-block col-md-2">
                        me
                    </div>
                    <div className="d-none d-sm-block col-md-3">
                        1/1/2021
                    </div>
                    <div className="col-1 col-md-2">
                        <i className="fa fa-trash"></i>
                    </div>
                </div>
            </div>
            </div>
    )
}

export default CourseGrid