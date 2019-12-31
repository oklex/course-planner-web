import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Helmet from "react-helmet";
import Login from '../Login/Login'

class App extends React.Component<{}, {}> {
  render() {
    return (
      <div className="App">
          <Login/>
      </div>
    );
  }
}

export default App;
