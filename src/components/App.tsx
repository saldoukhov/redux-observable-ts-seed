import * as React from "react";

import Login from "./Login.connect";

export interface AppProps {
  loading: boolean;
}

export default class App extends React.Component<AppProps, {}> {
  render() {
    return (
      <div className="app">
        <div className="main">
          <Login />
        </div>
      </div>
    );
  }
}
