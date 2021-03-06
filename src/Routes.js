import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import LearningPage from "./components/LearningPage";
import CoursePage from "./components/CoursePage";
import Authform from "./Authentication/Authform";

export default class Routes extends Component {

  render() {
    return (
      <div>
        <Switch>
        <Route exact path="/" component={LandingPage} /> 
        <Route exact path="/auth" component={Authform} />
        <Route exact path="/courses" component={CoursePage} />
        <Route exact path="/courses" component={CoursePage} />
        <Route exact path="/learning" component={LearningPage} />
        </Switch>
      </div>
    );
  }
}
