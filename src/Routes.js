import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import LearningPage from "./components/LearningPage";
import CoursePage from "./components/CoursePage";
import AlphabetPage from  "./components/AlphabetPage";


export default class Routes extends Component {

  render() {
    return (
      <div>
        <Switch>
        <Route exact path="/" component={LandingPage} />
          <Route exact path="/courses" component={CoursePage} />
        <Route exact path="/learning" component={LearningPage} />
        <Route exact path="/alphabet" component={AlphabetPage}/>
        </Switch>
      </div>
    );
  }
}