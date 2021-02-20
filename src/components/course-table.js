import React from "react";

class CourseTable extends React.Component{
    render() {
        return(
            <div className="container-fluid">
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
                            <i className="fa fa-th"></i>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>CS5610</td>
                        <td>me</td>
                        <td>1/1/2021</td>
                        <td>
                            <i className="fa fa-trash"></i>
                            <i className="fa fa-edit"></i>
                            <i className="fa fa-check"></i>
                        </td>
                    </tr>
                </tbody>
            </table>
            </div>
        )
    }
}

export default CourseTable