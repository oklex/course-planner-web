import React from "react";
import "./App.scss";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Helmet from "react-helmet";

class App extends React.Component<{}, {}> {
  render() {
    return (
      <div className="App">
        <h1>Hello world</h1>
      </div>
    );
  }
}

export default App;
