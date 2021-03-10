import logo from './logo.svg';
import './App.css';
import CourseManager from "./components/course-manager";
import CourseEditor from "./components/course-editor/course-editor";
import {BrowserRouter, Link, Route} from "react-router-dom";
import CourseGrid from "./components/course-grid/course-grid";
import CourseTable from "./components/course-table/course-table";
import React from "react";
// import HomePage from "./components/HomePage";

function App() {
  return (
      <BrowserRouter>
          {/*<Route path="/" component={Home}/>*/}
          <Route path="/courses" component={CourseManager}></Route>
          {/*<Route path="/" exact={true}  component={HomePage}/>*/}
          {/*<Route path="/editor" component={CourseEditor}/>*/}
          <Route path="/editor" render={(props) =>
              <CourseEditor {...props}/>}/>
      </BrowserRouter>
  );
}

export default App;
