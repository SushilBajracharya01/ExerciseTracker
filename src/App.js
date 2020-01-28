import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';

import Navbar from "./components/navbar";
import ExercisesList from "./components/exercises-list";
import EditExercise from "./components/edit-exercises";
import CreateExercise from "./components/create-exercise";
import CreateUser from "./components/create-user";


function App() {
  return (
    <Router>
      <div className="background">
        <div className="top-background">
          <h1 className="title text-center">Exercise Tracker</h1>
        </div>
        <div className="bottom-background"></div>
      </div>
      <br />
      <br />
      <br />
      <div className="container-fluid">
        <Navbar />
        <hr className="line" />
        <Route path="/" exact component={ExercisesList} />
        <Route path="/edit/:id" component={EditExercise} />
        <Route path="/create" component={CreateExercise} />
        <Route path="/user" component={CreateUser} />
      </div>

    </Router>

  );
}

export default App;
