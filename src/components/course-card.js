import React from 'react'
import {Link} from "react-router-dom";

const CourseCard = ({cardCourse}) => {
    return(
        <div className="card" style={{width: "18rem"}}>
            {/*{*/}
            {/*    courses.map(course =>*/}
            {/*        <CourseRow*/}
            {/*            title={course.title}*/}
            {/*            lastModified={course.lastModified}*/}
            {/*            ownedBy={course.ownedBy}/>*/}
            {/*    )*/}
            {/*}*/}
            <img className="card-img-top" src="..." alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{cardCourse.title}</h5>
                <p className="card-text">Some quick example text to build on the card title and make
                    up the bulk of the card's content.</p>
                <Link to="/editor" className="btn btn-primary">
                    {cardCourse.title}
                </Link>
            </div>
        </div>
    )
}

export default CourseCard