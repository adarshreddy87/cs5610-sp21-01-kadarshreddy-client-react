import logo from './logo.svg';
import './App.css';
import CourseManager from "./components/course-manager";
import CourseEditor from "./components/course-editor";
import {BrowserRouter, Route} from "react-router-dom";
import CourseGrid from "./components/course-grid";
import CourseTable from "./components/course-table";
import React from "react";
function App() {
  return (
      <BrowserRouter>
          <Route path="/courses" component={CourseManager}/>
          {/*<Route path="/editor" component={CourseEditor}/>*/}
          <Route path="/editor" render={(props) =>
              <CourseEditor {...props}/>}/>
          {/*<div>*/}
          {/*  <CourseManager/>*/}
          {/*  <CourseEditor/>*/}
          {/*</div>*/}
      </BrowserRouter>
  );
}

export default App;